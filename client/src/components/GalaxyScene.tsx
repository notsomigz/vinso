
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { REFERENCE_PICTURE_TILES } from "@/lib/referencePictureTiles";
import { SWEET_TILE_MESSAGES } from "@/lib/sweetTileMessages";

export type GalaxyRunState = "idle" | "launch";
type GalaxySceneProps = {
  runState: GalaxyRunState;
  initialTime?: number;
  isPlaying?: boolean;
};

const AUDIO_URL = "/audio/arthur-miguel-your-universe.mp3";

const TILE_URLS = REFERENCE_PICTURE_TILES;

const FONT_URL = "/manus-storage/DancingScript_760c67cb.json";

const TIMELINE_LENGTH = 22;
const CLOSE_IN_DURATION = 5;
const EQUATORIAL_PULLBACK_DURATION = 12;
const FINAL_ROTATION_DURATION = 5;
const PARTICLE_RING_INNER_RADIUS = 110;
const COMPACT_ORBIT_INNER_RADIUS = 124;
const COMPACT_ORBIT_OUTER_RADIUS = 216;
const MIDDLE_INNER_RADIUS = COMPACT_ORBIT_OUTER_RADIUS;
const PHOTO_RING_INNER_RADIUS = 240;
const PHOTO_RING_OUTER_RADIUS = 540;

const PHOTO_VERTICAL_SPREAD = 18;
const RING_ROTATION_SPEED = 0.002;
const PARTICLE_ROTATION_SPEED = 0.001;
const COMPACT_ORBIT_ROTATION_SPEED = 0.001;
const SPHERE_ROTATION_SPEED = 0.022;
const MIDDLE_OUTER_RADIUS = 440;
const OUTER_PARTICLE_RADIUS = 550;
const FINAL_CAMERA_MARGIN = 20;
const PULLBACK_REFERENCE_RING_RADIUS = 530;
const PULLBACK_REFERENCE_SCALE = OUTER_PARTICLE_RADIUS / PULLBACK_REFERENCE_RING_RADIUS;
const PULLBACK_REFERENCE_RADIUS = Math.hypot(30, 600) * PULLBACK_REFERENCE_SCALE;
const FINAL_CAMERA_RADIUS = PULLBACK_REFERENCE_RADIUS + FINAL_CAMERA_MARGIN;
const AURORA_POINT_COUNT = 34;

const MIDDLE_PARTICLE_SIZE = 2.1;
const COMPACT_PARTICLE_SIZE = MIDDLE_PARTICLE_SIZE * 2;
const COMPACT_PARTICLE_COUNT = 9000;
const COMPACT_PARTICLE_OPACITY = 0.66;
const COMPACT_COLOR_BRIGHTNESS = 1.12;
const FORMER_MIDDLE_PARTICLE_SIZE = 0.44;
const OUTER_PARTICLE_SIZE = 0.44;
const OUTER_COLOR_MIN_BRIGHTNESS = 1.04;
const OUTER_COLOR_VARIATION = 0.08;
const OUTER_OPACITY = 0.34;
const OUTER_PARTICLE_COUNT = 220000;
const PHOTO_TILE_COUNT = 300;

const PHOTO_FLIGHT_DURATION = 120000;
const PHOTO_FLIGHT_SCALE = 1.12;
const PRELUDE_DURATION = 0;

const SPHERE_PALETTE = { r: 0.86, g: 0.34, b: 0.7 };
const sphereColor = (brightness: number) => ({
  r: Math.min(1, SPHERE_PALETTE.r * brightness),
  g: Math.min(1, SPHERE_PALETTE.g * brightness),
  b: Math.min(1, SPHERE_PALETTE.b * brightness),
});

const compactColor = (brightness: number) => {
  const base = sphereColor(brightness);
  return {
    r: Math.min(1, base.r * 1.04),
    g: Math.min(1, base.g * 1.12),
    b: base.b * 0.9,
  };
};

const OUTER_COLOR_SATURATION = 1.18;
const OUTER_DISTANCE_SATURATION_RANGE = 0.18;
const outerColor = (brightness: number, saturation = OUTER_COLOR_SATURATION) => {
  const base = compactColor(brightness);
  const average = (base.r + base.g + base.b) / 3;
  return {
    r: Math.min(1, average + (base.r - average) * saturation),
    g: Math.min(1, average + (base.g - average) * saturation),
    b: Math.min(1, average + (base.b - average) * saturation),
  };
};

const seeded = (seed: number) => {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
};

const smooth = (value: number) => value * value * (3 - 2 * value);
const smoother = (value: number) => value * value * value * (value * (value * 6 - 15) + 10);
const power2InOut = (value: number) => value < 0.5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 2) / 2;
const lerp = (a: THREE.Vector3, b: THREE.Vector3, amount: number) => a.clone().lerp(b, amount);
function addStars(scene: THREE.Scene, random: () => number) {
  const count = 2300;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const radius = 500 + random() * 850;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const offset = index * 3;
    positions[offset] = radius * Math.sin(phi) * Math.cos(theta);
    positions[offset + 1] = radius * Math.cos(phi) * 0.82;
    positions[offset + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const lavender = random() > 0.68;
    const color = new THREE.Color(lavender ? "#cdb7ff" : (random() > 0.45 ? "#f5c9ef" : "#ffe2f8"));
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 1.05,
      sizeAttenuation: true,
      vertexColors: true,
      map: getRoundParticleTexture(),
      transparent: true,
      alphaTest: 0.01,
      opacity: 0.64,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  points.name = "reference-starfield";
  scene.add(points);

  const distantStars = new THREE.Group();
  distantStars.name = "reference-large-stars";
  for (let index = 0; index < 84; index += 1) {
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(1.8 + random() * 3.4, 8, 8),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.88 + random() * 0.07, 0.42, 0.66 + random() * 0.13),
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      }),
    );
    const angle = random() * Math.PI * 2;
    const radius = 440 + random() * 780;
    star.position.set(Math.cos(angle) * radius, (random() - 0.5) * 640, Math.sin(angle) * radius);
    distantStars.add(star);
  }
  const CUBIC_STAR_COUNT = 8000;
  const CUBIC_STAR_HALF_EXTENT = 2400;
  const cubePositions = new Float32Array(CUBIC_STAR_COUNT * 3);
  const cubeColors = new Float32Array(CUBIC_STAR_COUNT * 3);
  for (let index = 0; index < CUBIC_STAR_COUNT; index += 1) {
    const offset = index * 3;
    const face = Math.floor(random() * 6);
    const first = (random() * 2 - 1) * CUBIC_STAR_HALF_EXTENT;
    const second = (random() * 2 - 1) * CUBIC_STAR_HALF_EXTENT;
    const side = random() > 0.5 ? CUBIC_STAR_HALF_EXTENT : -CUBIC_STAR_HALF_EXTENT;
    if (face < 2) cubePositions.set([side, first, second], offset);
    else if (face < 4) cubePositions.set([first, side, second], offset);
    else cubePositions.set([first, second, side], offset);
    const color = new THREE.Color(face % 3 === 0 ? "#cdb7ff" : (face % 3 === 1 ? "#f5c9ef" : "#ffe2f8"));
    cubeColors[offset] = color.r;
    cubeColors[offset + 1] = color.g;
    cubeColors[offset + 2] = color.b;
  }
  const cubicStars = new THREE.Points(
    new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(cubePositions, 3)).setAttribute("color", new THREE.BufferAttribute(cubeColors, 3)),
    new THREE.PointsMaterial({
      size: 0.62, sizeAttenuation: true, vertexColors: true, map: getRoundParticleTexture(),
      transparent: true, alphaTest: 0.01, opacity: 0.28, depthWrite: false, blending: THREE.AdditiveBlending,
    }),
  );
  cubicStars.name = "cubic-galaxy-starfield";
  scene.add(cubicStars);
  scene.add(distantStars);
  return { points, distantStars, cubicStars };
}

let roundParticleTexture: THREE.CanvasTexture | null = null;

function getRoundParticleTexture() {
  if (roundParticleTexture) return roundParticleTexture;
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");
  if (context) {
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.48, "rgba(255,255,255,0.96)");
    gradient.addColorStop(0.78, "rgba(255,255,255,0.42)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
  }
  roundParticleTexture = new THREE.CanvasTexture(canvas);
  roundParticleTexture.needsUpdate = true;
  return roundParticleTexture;
}

function particlePoints(
  positions: Float32Array,
  colors: Float32Array,
  size: number,
  opacity: number,
  name: string,
  animateParticles = false,
  blendMode: THREE.Blending = THREE.AdditiveBlending,
  writeDepth = false,
  particleSpeed = 2,
  particleAmplitude = 1,
) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  if (animateParticles) {
    const shifts = new Float32Array((positions.length / 3) * 4);
    for (let index = 0; index < positions.length / 3; index += 1) {
      const offset = index * 4;
      shifts[offset] = Math.abs(Math.sin(index * 12.9898)) * Math.PI;
      shifts[offset + 1] = Math.abs(Math.sin(index * 78.233 + 0.4)) * Math.PI * 2;
      shifts[offset + 2] = (0.1 + Math.abs(Math.sin(index * 39.17 + 1.7)) * 0.9) * Math.PI;
      shifts[offset + 3] = 0.9 + Math.abs(Math.sin(index * 5.37 + 2.2)) * 1.8;
    }
    geometry.setAttribute("sphereShift", new THREE.BufferAttribute(shifts, 4));
  }
  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size,
      sizeAttenuation: true,
      vertexColors: true,
      map: getRoundParticleTexture(),
      transparent: true,
      alphaTest: 0.01,
      opacity,
      depthTest: !name.startsWith("planet-"),
      depthWrite: writeDepth,
      blending: blendMode,
    }),
  );
  if (animateParticles) {
    const material = points.material as THREE.PointsMaterial;
    material.onBeforeCompile = (shader) => {
      shader.uniforms.innerSphereTime = { value: 0 };
      shader.uniforms.innerSphereParticleSpeed = { value: particleSpeed };
      shader.uniforms.innerSphereParticleAmplitude = { value: particleAmplitude };
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          "attribute vec4 sphereShift;\nuniform float innerSphereTime;\nuniform float innerSphereParticleSpeed;\nuniform float innerSphereParticleAmplitude;\n#include <common>",
        )
        .replace(
          "#include <begin_vertex>",
          "vec3 transformed = position;\nfloat sphereT = innerSphereTime * innerSphereParticleSpeed;\nfloat moveT = mod(sphereShift.x + sphereShift.z * sphereT, 6.28318530718);\nfloat moveS = mod(sphereShift.y + sphereShift.z * sphereT, 6.28318530718);\ntransformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * sphereShift.w * innerSphereParticleAmplitude;",
        );
      points.userData.innerSphereShader = shader;
    };
    material.needsUpdate = true;
  }
  points.name = name;
  points.userData.baseOpacity = opacity;
  points.userData.baseSize = size;
  return points;
}

function addPlanet(scene: THREE.Scene, random: () => number) {
  const planet = new THREE.Group();
  planet.name = "reference-hollow-purple-planet";

  const shellCount = 30000;
  const shellPositions = new Float32Array(shellCount * 3);
  const shellColors = new Float32Array(shellCount * 3);
  for (let index = 0; index < shellCount; index += 1) {

    const radius = 92 + Math.pow(random(), 0.62) * 16;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const offset = index * 3;
    shellPositions[offset] = radius * Math.sin(phi) * Math.cos(theta);
    shellPositions[offset + 1] = radius * Math.cos(phi);
    shellPositions[offset + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const color = sphereColor(0.82 + random() * 0.18);
    shellColors[offset] = color.r;
    shellColors[offset + 1] = color.g;
    shellColors[offset + 2] = color.b;
  }
  const shellGroup = new THREE.Group();
  shellGroup.name = "reference-sphere-shell-group";
  shellGroup.rotation.z = 0.2;
  shellGroup.add(particlePoints(shellPositions, shellColors, 1.46, 0.78, "planet-purple-shell", true, THREE.AdditiveBlending, false, 0.16, 1.35));

  const fireflyCount = 6500;
  const fireflyPositions = new Float32Array(fireflyCount * 3);
  const fireflyColors = new Float32Array(fireflyCount * 3);
  for (let index = 0; index < fireflyCount; index += 1) {

    const radius = 102 + Math.cbrt(random()) * 12;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const offset = index * 3;
    fireflyPositions[offset] = radius * Math.sin(phi) * Math.cos(theta);
    fireflyPositions[offset + 1] = radius * Math.cos(phi);
    fireflyPositions[offset + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const whiteFirefly = index % 4 === 0;
    const color = whiteFirefly
      ? { r: 1.0, g: 1.0, b: 1.0 }
      : sphereColor(1.02 + random() * 0.08);
    fireflyColors[offset] = color.r;
    fireflyColors[offset + 1] = color.g;
    fireflyColors[offset + 2] = color.b;
  }

  if (fireflyCount > 0) {

    shellGroup.add(particlePoints(fireflyPositions, fireflyColors, 1.52, 0.78, "planet-white-pink-boundary-fireflies", true, THREE.AdditiveBlending, false, 0.24, 2.0));

    shellGroup.add(particlePoints(fireflyPositions, fireflyColors, 2.7, 0.12, "planet-white-pink-boundary-glow", true, THREE.AdditiveBlending, false, 0.24, 2.0));
  }
  planet.add(shellGroup);
  planet.userData.shellGroup = shellGroup;

  const orbitalBands = new THREE.Group();
  orbitalBands.name = "planet-equatorial-orbits";
  const compactOrbit = new THREE.Group();
  compactOrbit.name = "compact-inner-orbit";
  const innerCount = COMPACT_PARTICLE_COUNT;
  const innerPositions = new Float32Array(innerCount * 3);
  const innerColors = new Float32Array(innerCount * 3);
  for (let index = 0; index < innerCount; index += 1) {

    const radius = Math.sqrt(random()) * COMPACT_ORBIT_OUTER_RADIUS;
    const theta = random() * Math.PI * 2;
    const offset = index * 3;
    innerPositions[offset] = Math.cos(theta) * radius;
    innerPositions[offset + 1] = (random() - 0.5) * 1.8;
    innerPositions[offset + 2] = Math.sin(theta) * radius;
    const color = compactColor(COMPACT_COLOR_BRIGHTNESS);
    innerColors[offset] = color.r;
    innerColors[offset + 1] = color.g;
    innerColors[offset + 2] = color.b;
  }
  compactOrbit.add(particlePoints(innerPositions, innerColors, COMPACT_PARTICLE_SIZE, COMPACT_PARTICLE_OPACITY, "thin-sphere-outline-radius", false, THREE.NormalBlending, false));
  compactOrbit.rotation.z = 0;
  planet.add(compactOrbit);
  planet.userData.compactOrbit = compactOrbit;

  const middleCount = 60000;
  const middlePositions = new Float32Array(middleCount * 3);
  const middleColors = new Float32Array(middleCount * 3);
  for (let index = 0; index < middleCount; index += 1) {
    const radialBias = Math.pow(random(), 1.5);
    const radius = Math.sqrt(
      MIDDLE_OUTER_RADIUS * MIDDLE_OUTER_RADIUS * radialBias
      + (1 - radialBias) * MIDDLE_INNER_RADIUS * MIDDLE_INNER_RADIUS,
    );
    const theta = random() * Math.PI * 2;
    const offset = index * 3;
    middlePositions[offset] = Math.cos(theta) * radius;
    middlePositions[offset + 1] = (random() - 0.5) * 2;
    middlePositions[offset + 2] = Math.sin(theta) * radius;
    const color = compactColor(1.08);
    middleColors[offset] = color.r;
    middleColors[offset + 1] = color.g;
    middleColors[offset + 2] = color.b;
  }

  orbitalBands.add(particlePoints(middlePositions, middleColors, MIDDLE_PARTICLE_SIZE, 0.76, "bright-pink-transition-radius"));

  const outerCount = OUTER_PARTICLE_COUNT;
  const outerPositions = new Float32Array(outerCount * 3);
  const outerColors = new Float32Array(outerCount * 3);
  for (let index = 0; index < outerCount; index += 1) {
    const radius = 350 + random() * (OUTER_PARTICLE_RADIUS - 350);
    const theta = random() * Math.PI * 2;
    const offset = index * 3;
    outerPositions[offset] = Math.cos(theta) * radius;
    outerPositions[offset + 1] = (random() - 0.5) * 4;
    outerPositions[offset + 2] = Math.sin(theta) * radius;
    const depthT = THREE.MathUtils.clamp((radius - 350) / (OUTER_PARTICLE_RADIUS - 350), 0, 1);
    const distanceSaturation = OUTER_COLOR_SATURATION + (1 - depthT) * OUTER_DISTANCE_SATURATION_RANGE;
    const color = outerColor(OUTER_COLOR_MIN_BRIGHTNESS + random() * OUTER_COLOR_VARIATION, distanceSaturation);
    outerColors[offset] = color.r;
    outerColors[offset + 1] = color.g;
    outerColors[offset + 2] = color.b;
  }

  orbitalBands.add(particlePoints(outerPositions, outerColors, OUTER_PARTICLE_SIZE, OUTER_OPACITY, "light-open-outer-radius"));
  orbitalBands.rotation.z = 0;
  planet.add(orbitalBands);
  planet.userData.orbitalBands = orbitalBands;

  scene.add(planet);
  return planet;
}

const loadPhotoTextures = async (urls: readonly string[]) => {
  const loader = new THREE.TextureLoader();
  const loaded = await Promise.all(
    urls.map(async (url) => {
      try {
        return await loader.loadAsync(url);
      } catch {
        return null;
      }
    }),
  );
  const textures = loaded.filter((texture) => texture !== null) as THREE.Texture[];
  textures.forEach((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  });
  return textures;
};

function addPhotoRing(scene: THREE.Scene, textures: Array<THREE.Texture | null>, random: () => number, urls: readonly string[]) {
  const ring = new THREE.Group();
  ring.name = "reference-landscape-photo-ring";
  const sprites: Array<{ sprite: THREE.Sprite; base: THREE.Vector3; target: THREE.Vector3; originalScale: THREE.Vector3; delay: number; phase: number; drift: number; baseOpacity: number; detailUrl: string }> = [];
  const placedTiles: Array<{ position: THREE.Vector3; clearance: number }> = [];

  for (let index = 0; index < PHOTO_TILE_COUNT; index += 1) {
    const texture = textures[index % textures.length];
    if (!texture) continue;
    const width = 6 + random() * 0.9;
    const height = width;
    const clearance = width * 1.2;
    const radialLaneCount = 12;
    const slotsPerLane = Math.ceil(PHOTO_TILE_COUNT / radialLaneCount);
    const baseLane = index % radialLaneCount;
    const baseSlot = Math.floor(index / radialLaneCount);
    const radialStep = (PHOTO_RING_OUTER_RADIUS - PHOTO_RING_INNER_RADIUS) / (radialLaneCount - 1);
    let chosenAngle = 0;
    let chosenRadius = PHOTO_RING_INNER_RADIUS;
    let chosenY = 0;
    let chosenPosition = new THREE.Vector3();

    for (let attempt = 0; attempt < 96; attempt += 1) {
      const lane = (baseLane + attempt * 5) % radialLaneCount;
      const slot = (baseSlot + Math.floor(attempt / radialLaneCount)) % slotsPerLane;
      const angle = (slot / slotsPerLane) * Math.PI * 2 + lane * 0.125 + (random() - 0.5) * 0.014;
      const radius = THREE.MathUtils.clamp(
        PHOTO_RING_INNER_RADIUS + lane * radialStep + (random() - 0.5) * 2.5,
        PHOTO_RING_INNER_RADIUS,
        PHOTO_RING_OUTER_RADIUS,
      );
      const y = ((lane % 3) - 1) * PHOTO_VERTICAL_SPREAD * 0.52 + (random() - 0.5) * 1.5;
      const candidate = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      const hasCollision = placedTiles.some(({ position, clearance: existingClearance }) => candidate.distanceToSquared(position) < (clearance + existingClearance) ** 2);
      if (!hasCollision || attempt === 95) {
        chosenAngle = angle;
        chosenRadius = radius;
        chosenY = y;
        chosenPosition = candidate;
        break;
      }
    }

    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9 + random() * 0.1,
      depthTest: false,
      depthWrite: false,
      color: 0xffffff,
    });
    material.rotation = (random() - 0.5) * 0.13;
    const sprite = new THREE.Sprite(material);
    sprite.position.copy(chosenPosition);
    sprite.scale.set(width, height, 1);
    sprite.renderOrder = 8;
    ring.add(sprite);
    placedTiles.push({ position: chosenPosition.clone(), clearance });
    const destinationAngle = chosenAngle + (random() - 0.5) * 0.012;
    const destinationRadius = THREE.MathUtils.clamp(chosenRadius + (random() - 0.5) * 1.5, PHOTO_RING_INNER_RADIUS, PHOTO_RING_OUTER_RADIUS);
    sprites.push({
      sprite,
      base: sprite.position.clone(),
      target: new THREE.Vector3(
        Math.cos(destinationAngle) * destinationRadius,
        chosenY + (random() - 0.5) * 0.8,
        Math.sin(destinationAngle) * destinationRadius,
      ),
      originalScale: sprite.scale.clone(),
      delay: Math.floor(index / 32),
      phase: random() * Math.PI * 2,
      drift: 0.4 + random() * 0.9,
      baseOpacity: material.opacity,
      detailUrl: urls[index % urls.length] ?? "",
    });
  }
  scene.add(ring);
  return { ring, sprites };
}

function addAurora(scene: THREE.Scene, random: () => number) {
  const group = new THREE.Group();
  group.name = "surrounding-soft-aurora-halo";
  group.rotation.x = 0.2;
  const auroras: Array<{ line: THREE.Line; phase: number; speed: number; amplitude: number; radiusX: number; radiusY: number; verticalOffset: number }> = [];
  const pointCount = AURORA_POINT_COUNT;
  const ribbonColors = [0xffc6f5, 0xd9b7ff, 0xffe4fb];

  for (let index = 0; index < 6; index += 1) {
    const positions = new Float32Array(pointCount * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({
      color: ribbonColors[index % ribbonColors.length],
      transparent: true,
      opacity: 0.08 + index * 0.02,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const line = new THREE.LineLoop(geometry, material);
    line.frustumCulled = false;
    const radiusX = 610 + index * 14;
    const radiusY = 200 + index * 12;
    const verticalOffset = (index - 2.5) * 30;
    line.rotation.set((index - 2.5) * 0.12, index * 0.52, (index % 2 === 0 ? 1 : -1) * 0.12);
    line.position.y = verticalOffset;
    group.add(line);
    auroras.push({
      line,
      phase: random() * Math.PI * 2,
      speed: 0.08 + random() * 0.05,
      amplitude: 16 + random() * 10,
      radiusX,
      radiusY,
      verticalOffset,
    });
  }

  scene.add(group);
  return auroras;
}

function addWorldText(scene: THREE.Scene) {
  const group = new THREE.Group();
  group.name = "reference-back-facing-title";
  group.renderOrder = 8;
  scene.add(group);

  const fallback = document.createElement("canvas");
  fallback.width = 1500;
  fallback.height = 220;
  const context = fallback.getContext("2d");
  if (context) {
    context.font = '600 70px "Brush Script MT", "Segoe Script", cursive';
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.shadowColor = "rgba(255,255,255,0.46)";
    context.shadowBlur = 16;
    context.fillStyle = "rgba(255,255,255,0.96)";
    context.fillText("Happy Monthsarry Mylove", 750, 110);
    const texture = new THREE.CanvasTexture(fallback);
    texture.colorSpace = THREE.SRGBColorSpace;
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(300, 44),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide }),
    );
    plane.position.set(0, 330, 0);
    group.add(plane);
  }

  new FontLoader().load(FONT_URL, (font) => {
    const geometry = new TextGeometry("Happy Monthsarry Mylove", {
      font,
      size: 28,
      depth: 2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelSegments: 5,
    });
    geometry.computeBoundingBox();
    const width = geometry.boundingBox ? geometry.boundingBox.max.x - geometry.boundingBox.min.x : 0;
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.55, metalness: 0.3, roughness: 0.2, transparent: true, depthTest: false, depthWrite: false }),
    );
    mesh.position.set(-width / 2, 330, 0);
    group.children.forEach((child) => {
      const childMesh = child as THREE.Mesh;
      childMesh.geometry?.dispose();
      const material = childMesh.material as THREE.MeshBasicMaterial | undefined;
      material?.map?.dispose();
      material?.dispose();
      group.remove(child);
    });
    group.add(mesh);
  });
  return group;
}

function cameraPose(seconds: number, aspect: number) {
  const t = Math.min(Math.max(seconds - PRELUDE_DURATION, 0), TIMELINE_LENGTH);
  const scale = 1;
  const start = new THREE.Vector3(0, 60, 200).multiplyScalar(scale);
  const close = new THREE.Vector3(0, 10, 138).multiplyScalar(scale);

  const equator = new THREE.Vector3(0, 0, PULLBACK_REFERENCE_RADIUS).multiplyScalar(scale);
  const final = new THREE.Vector3(-200, 360, -700)
    .normalize()
    .multiplyScalar(FINAL_CAMERA_RADIUS)
    .multiplyScalar(scale);
  let position: THREE.Vector3;

  if (t <= CLOSE_IN_DURATION) {
    position = lerp(start, close, power2InOut(t / CLOSE_IN_DURATION));
  } else if (t <= CLOSE_IN_DURATION + EQUATORIAL_PULLBACK_DURATION) {

    const rawPullbackProgress = (t - CLOSE_IN_DURATION) / EQUATORIAL_PULLBACK_DURATION;
    const pullbackProgress = smoother(Math.min(Math.max(rawPullbackProgress, 0), 1));
    position = lerp(close, equator, pullbackProgress);
  } else {
    const rotationProgress = (t - CLOSE_IN_DURATION - EQUATORIAL_PULLBACK_DURATION) / FINAL_ROTATION_DURATION;
    const easedRotation = smoother(Math.min(Math.max(rotationProgress, 0), 1));

    const equatorDirection = equator.clone().normalize();
    const finalDirection = final.clone().normalize();
    const arcAngle = equatorDirection.angleTo(finalDirection);
    const arcSin = Math.sin(arcAngle);
    const arcDirection = arcSin < 0.0001
      ? equatorDirection
      : equatorDirection
          .multiplyScalar(Math.sin((1 - easedRotation) * arcAngle) / arcSin)
          .add(finalDirection.multiplyScalar(Math.sin(easedRotation * arcAngle) / arcSin));
    const cameraRadius = THREE.MathUtils.lerp(PULLBACK_REFERENCE_RADIUS, FINAL_CAMERA_RADIUS, easedRotation);
    position = arcDirection.normalize().multiplyScalar(cameraRadius);
  }

  const pullbackT = THREE.MathUtils.clamp(
    (t - CLOSE_IN_DURATION) / EQUATORIAL_PULLBACK_DURATION,
    0,
    1,
  );
  const portraitCompensation = 0.85 * (1 - smoother(pullbackT));
  const narrowScale = aspect < 1 ? 1 + (1 - aspect) * portraitCompensation : 1;
  position.multiplyScalar(narrowScale);
  return { position, target: new THREE.Vector3(0, 0, 0), textY: Math.PI };
}

export default function GalaxyScene({ runState, initialTime = 0, isPlaying = true }: GalaxySceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const runStateRef = useRef(runState);
  const isPlayingRef = useRef(isPlaying);
  runStateRef.current = runState;
  isPlayingRef.current = isPlaying;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const random = seeded(314159);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.78;
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.className = "galaxy-canvas";
    renderer.domElement.setAttribute("aria-label", "Interactive memory galaxy");
    mount.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.14;
    controls.rotateSpeed = 0.3;
    controls.zoomSpeed = 0.6;

    controls.enablePan = true;
    controls.screenSpacePanning = true;
    controls.enableRotate = true;
    controls.touches.ONE = THREE.TOUCH.ROTATE;
    controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
    controls.minDistance = 0.01;
    controls.maxDistance = Infinity;
    controls.target.set(0, 0, 0);

    const { points: stars, distantStars, cubicStars } = addStars(scene, random);
  const planet = addPlanet(scene, random);
    const animatedPointLayers: THREE.Points[] = [];
    planet.traverse((object) => { if (object instanceof THREE.Points) animatedPointLayers.push(object); });
    const initialOrbitalBands = planet.userData.orbitalBands as THREE.Group | undefined;
    if (initialOrbitalBands) initialOrbitalBands.rotation.y = initialTime * 60 * 0.001;
    const initialCompactOrbit = planet.userData.compactOrbit as THREE.Group | undefined;
    if (initialCompactOrbit) initialCompactOrbit.rotation.y = initialTime * 60 * COMPACT_ORBIT_ROTATION_SPEED;
  planet.rotation.order = "ZYX";
    planet.rotation.z = 0;
    const auroras = addAurora(scene, random);
    const title = addWorldText(scene);
    let photoRing: ReturnType<typeof addPhotoRing> | null = null;
    let disposed = false;
    let frame = 0;
    let startedAt = performance.now() - initialTime * 1000;
    let previousState: GalaxyRunState | null = runState;
    let flightStartedAt = performance.now() - initialTime * 1000;
    let pauseStartTime: number | null = null;
    let hoveredSprite: THREE.Sprite | null = null;
    let detailOverlay: HTMLDivElement | null = null;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const findTileAt = (event: PointerEvent) => {
      if (!photoRing) return null;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(photoRing.ring.children, false)[0]?.object;
      return hit instanceof THREE.Sprite ? hit : null;
    };
    const closeDetail = () => {
      detailOverlay?.remove();
      detailOverlay = null;
    };
    let detailIndex = -1;
    const openDetailAt = (index: number) => {
      const entries = photoRing?.sprites ?? [];
      if (!entries.length) return;
      detailIndex = (index + entries.length) % entries.length;
      const item = entries[detailIndex];
      if (!item?.detailUrl) return;
      closeDetail();
      detailOverlay = document.createElement("div");
      detailOverlay.setAttribute("role", "dialog");
      detailOverlay.setAttribute("aria-modal", "true");
      detailOverlay.setAttribute("aria-label", "Picture detail");
      Object.assign(detailOverlay.style, {
        position: "fixed", inset: "0", zIndex: "30", display: "grid", placeItems: "center",
        padding: "clamp(16px, 5vw, 56px)", background: "rgba(0,0,0,0.84)", backdropFilter: "blur(10px)",
      });
      const content = document.createElement("div");
      Object.assign(content.style, { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", maxWidth: "92vw" });
      const image = document.createElement("img");
      image.src = item.detailUrl;
      image.alt = `Memory picture ${detailIndex + 1}`;
      Object.assign(image.style, { maxWidth: "min(92vw, 920px)", maxHeight: "78vh", objectFit: "contain", borderRadius: "14px", boxShadow: "0 24px 90px rgba(0,0,0,0.6)" });
      const caption = document.createElement("p");
      caption.textContent = `${SWEET_TILE_MESSAGES[detailIndex % SWEET_TILE_MESSAGES.length]} · Memory ${detailIndex + 1} of ${entries.length}`;
      Object.assign(caption.style, { margin: "0", color: "rgba(255,255,255,0.9)", font: "500 clamp(13px, 1.8vw, 17px)/1.4 system-ui", letterSpacing: "0.02em", textAlign: "center" });
      content.append(image, caption);
      const buttonStyle = { position: "absolute", padding: "10px 16px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(20,12,28,0.88)", color: "white", font: "600 14px system-ui", cursor: "pointer" };
      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.textContent = "Close";
      closeButton.setAttribute("aria-label", "Close picture detail");
      Object.assign(closeButton.style, { ...buttonStyle, top: "max(16px, env(safe-area-inset-top))", right: "max(16px, env(safe-area-inset-right))" });
      closeButton.addEventListener("click", closeDetail);
      const previousButton = document.createElement("button");
      previousButton.type = "button";
      previousButton.textContent = "‹";
      previousButton.setAttribute("aria-label", "Previous picture");
      Object.assign(previousButton.style, { ...buttonStyle, left: "max(16px, env(safe-area-inset-left))", top: "50%", transform: "translateY(-50%)", fontSize: "30px", lineHeight: "1" });
      previousButton.addEventListener("click", () => openDetailAt(detailIndex - 1));
      const nextButton = document.createElement("button");
      nextButton.type = "button";
      nextButton.textContent = "›";
      nextButton.setAttribute("aria-label", "Next picture");
      Object.assign(nextButton.style, { ...buttonStyle, right: "max(16px, env(safe-area-inset-right))", top: "50%", transform: "translateY(-50%)", fontSize: "30px", lineHeight: "1" });
      nextButton.addEventListener("click", () => openDetailAt(detailIndex + 1));
      detailOverlay.addEventListener("click", (event) => { if (event.target === detailOverlay) closeDetail(); });
      detailOverlay.append(content, closeButton, previousButton, nextButton);
      mount.appendChild(detailOverlay);
      closeButton.focus();
    };
    const openDetail = (sprite: THREE.Sprite) => {
      const index = photoRing?.sprites.findIndex((entry) => entry.sprite === sprite) ?? -1;
      if (index >= 0) openDetailAt(index);
    };
    const onPointerMove = (event: Event) => {
      const next = findTileAt(event as PointerEvent);
      hoveredSprite = next;
      renderer.domElement.style.cursor = next ? "pointer" : "grab";
    };
    const onPointerLeave = () => {
      hoveredSprite = null;
      renderer.domElement.style.cursor = "grab";
    };
    const onCanvasClick = (event: Event) => {
      const tile = findTileAt(event as PointerEvent);
      if (tile) openDetail(tile);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDetail();
      else if (detailOverlay && event.key === "ArrowLeft") openDetailAt(detailIndex - 1);
      else if (detailOverlay && event.key === "ArrowRight") openDetailAt(detailIndex + 1);
    };
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerleave", onPointerLeave);
    renderer.domElement.addEventListener("click", onCanvasClick);
    window.addEventListener("keydown", onKeyDown);
    const initialPose = cameraPose(initialTime, window.innerWidth / window.innerHeight);
    camera.position.copy(initialTime >= PRELUDE_DURATION ? initialPose.position : new THREE.Vector3(0, 120, 400));
    camera.lookAt(initialPose.target);
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight, false);
    };
    renderer.domElement.style.touchAction = "none";
    window.addEventListener("resize", onResize);
    onResize();

    const shuffledTileUrls = Array.from({ length: PHOTO_TILE_COUNT }, (_, index) => TILE_URLS[index % TILE_URLS.length]);
    for (let index = shuffledTileUrls.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [shuffledTileUrls[index], shuffledTileUrls[swapIndex]] = [shuffledTileUrls[swapIndex], shuffledTileUrls[index]];
    }

    const initializePhotoRing = async () => {
      const photoTextures = await loadPhotoTextures(shuffledTileUrls);
      if (disposed) return;
      photoRing = addPhotoRing(scene, photoTextures, random, shuffledTileUrls);
      photoRing.ring.rotation.y = initialTime * 60 * RING_ROTATION_SPEED;
      const loadedPhotoTextures = new Map<string, THREE.Texture>();
      photoTextures.forEach((texture) => {
        const matchedUrl = shuffledTileUrls.find((url) => url === texture.image?.currentSrc || url === texture.image?.src || texture.image?.src.endsWith(new URL(url, window.location.origin).pathname.split("/").at(-1) ?? ""));
        if (matchedUrl) loadedPhotoTextures.set(matchedUrl, texture);
      });
      const applyPhotoOrder = (urls: string[]) => {
        if (!photoRing) return;
        photoRing.sprites.forEach((item, index) => {
          const url = urls[index % urls.length];
          item.detailUrl = url;
          const material = item.sprite.material as THREE.SpriteMaterial;
          const texture = loadedPhotoTextures.get(url) ?? photoTextures.find((candidate) => candidate.image?.src?.includes(url.split("/").at(-1) ?? ""));
          if (texture) material.map = texture;
          material.opacity = Math.max(item.baseOpacity, 0.9);
          material.needsUpdate = true;
        });
      };
      const shufflePhotoTiles = () => {
        if (!photoRing) return;
        const nextOrder = Array.from({ length: PHOTO_TILE_COUNT }, (_, index) => TILE_URLS[index % TILE_URLS.length]);
        for (let index = nextOrder.length - 1; index > 0; index -= 1) {
          const swapIndex = Math.floor(random() * (index + 1));
          [nextOrder[index], nextOrder[swapIndex]] = [nextOrder[swapIndex], nextOrder[index]];
        }
        applyPhotoOrder(nextOrder);
      };
      window.addEventListener("shuffle-photo-tiles", shufflePhotoTiles);
    };
    void initializePhotoRing();

    const animate = (time: number) => {
      if (disposed) return;
      frame = window.requestAnimationFrame(animate);
      const currentState = runStateRef.current;
      const playing = isPlayingRef.current;

      if (!playing && pauseStartTime === null) {
        pauseStartTime = time;
      }
      if (playing && pauseStartTime !== null) {
        const pauseDuration = time - pauseStartTime;
        startedAt += pauseDuration;
        flightStartedAt += pauseDuration;
        pauseStartTime = null;
      }

      if (currentState !== previousState) {
        previousState = currentState;
        startedAt = time;
        flightStartedAt = time;
      }

      const seconds = currentState === "launch" ? (playing ? (time - startedAt) / 1000 : ((pauseStartTime ?? time) - startedAt) / 1000) : 0;
      const clock = playing ? time / 1000 : (pauseStartTime ?? time) / 1000;
      const pose = cameraPose(seconds, camera.aspect);
      const viewDistance = camera.position.distanceTo(pose.target);
      const wideGrade = THREE.MathUtils.clamp((viewDistance - 360) / 780, 0, 1);
      const preludeActive = currentState === "launch" && seconds < PRELUDE_DURATION;
      const cameraSeconds = Math.max(0, seconds - PRELUDE_DURATION);
      const transitionProximity = THREE.MathUtils.clamp(1 - Math.abs(cameraSeconds - (CLOSE_IN_DURATION + EQUATORIAL_PULLBACK_DURATION)) / 1.5, 0, 1);
      const transitionBloomRelief = 1 - smoother(transitionProximity) * 0.34;
      const cinematicActive = currentState === "launch" && cameraSeconds <= TIMELINE_LENGTH && !preludeActive;
      const flightActive = currentState === "launch" && seconds >= PRELUDE_DURATION;
      if (preludeActive) {

        controls.enabled = false;
      } else if (cinematicActive) {
        controls.enabled = false;
        camera.position.copy(pose.position);
        camera.lookAt(pose.target);
      } else {
        controls.enabled = true;
        controls.update();
      }

      const sphereTime = currentState === "launch" ? seconds : clock;
      planet.rotation.y = 0;
      planet.rotation.x = 0;
      const shellGroup = planet.userData.shellGroup as THREE.Group | undefined;
      if (shellGroup) {
        shellGroup.rotation.y = sphereTime * SPHERE_ROTATION_SPEED;
        shellGroup.rotation.x = Math.sin(clock * 0.22) * 0.035;
        shellGroup.rotation.z = 0.2 + Math.cos(clock * 0.16) * 0.018;
      }
      const orbitalBands = planet.userData.orbitalBands as THREE.Group | undefined;
      if (orbitalBands) {
        orbitalBands.rotation.y += PARTICLE_ROTATION_SPEED;
        orbitalBands.rotation.x = 0;
      }
      const compactOrbit = planet.userData.compactOrbit as THREE.Group | undefined;
      if (compactOrbit) {
        compactOrbit.rotation.y += COMPACT_ORBIT_ROTATION_SPEED;
        compactOrbit.rotation.x = 0;
      }
      animatedPointLayers.forEach((object) => {
        if (object instanceof THREE.Points) {
          const material = object.material as THREE.PointsMaterial;
          const sphereShader = object.userData.innerSphereShader as { uniforms?: Record<string, { value: number }> } | undefined;
          if (sphereShader?.uniforms?.innerSphereTime) {
            sphereShader.uniforms.innerSphereTime.value = sphereTime;
          }
          const baseOpacity = Number(object.userData.baseOpacity ?? 0.5);
          const baseSize = Number(object.userData.baseSize ?? material.size);
          const isInner = object.name === "thin-sphere-outline-radius";
          const isMiddle = object.name.includes("bright-");
          const isOuter = object.name === "light-open-outer-radius";
          const grade = isInner ? 1 - wideGrade * 0.12 : isMiddle ? 1 + wideGrade * 0.7 : isOuter ? 1 + wideGrade * 0.42 : 1;
          const shimmer = 0.92 + (Math.sin(clock * 0.65 + object.id * 0.17) + 1) * 0.045;
          const transitionSoftness = isMiddle || isOuter ? transitionBloomRelief : 1;
          material.opacity = baseOpacity * grade * shimmer * transitionSoftness;
          material.size = baseSize * (1 + wideGrade * (isMiddle ? 0.1 : isOuter ? 0.12 : 0.04)) * transitionSoftness;
        }
      });
      stars.rotation.y = clock * 0.0025;
      distantStars.rotation.y = -clock * 0.004;
      cubicStars.rotation.y = clock * 0.0014;
      cubicStars.rotation.x = Math.sin(clock * 0.0008) * 0.06;

      distantStars.children.forEach((star, index) => {
        const material = (star as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.opacity = 0.42 + (Math.sin(clock * (0.55 + index * 0.013)) + 1) * 0.12;
      });

      if (photoRing) {
        const showPhotos = true;

        photoRing.ring.rotation.y += RING_ROTATION_SPEED;
        if (!flightActive) {
          photoRing.sprites.forEach((item) => {
            item.sprite.position.copy(item.base);
            item.sprite.position.y += Math.sin(clock * (0.42 + item.drift * 0.22) + item.phase) * 1.35;
            item.sprite.scale.copy(item.originalScale);
            item.sprite.rotation.z = Math.sin(clock * 0.18 + item.phase) * 0.018;
            const material = item.sprite.material as THREE.SpriteMaterial;
            material.opacity = showPhotos
              ? item.baseOpacity * (0.9 + (Math.sin(clock * 0.72 + item.phase) + 1) * 0.05)
              : 0;
          });
        } else {
          const flightElapsed = time - flightStartedAt - PRELUDE_DURATION * 1000;
          const closeTileProgress = THREE.MathUtils.smoothstep(cameraSeconds / CLOSE_IN_DURATION, 0, 1);
          const closeTileScale = THREE.MathUtils.lerp(0.68, 1, closeTileProgress);
          const finalBloomRelief = THREE.MathUtils.lerp(1, 0.82, THREE.MathUtils.smoothstep(cameraSeconds, CLOSE_IN_DURATION + EQUATORIAL_PULLBACK_DURATION, TIMELINE_LENGTH));
          photoRing.sprites.forEach((item) => {
            const progress = Math.max(0, Math.min(1, (flightElapsed - item.delay * 1000) / PHOTO_FLIGHT_DURATION));
            const easeProgress = 1 - Math.pow(1 - progress, 2);
            const targetWobbleY = Math.sin(time * 0.00002 + item.phase) * 1.35;
            const targetWobbleX = Math.sin(time * 0.00015 + item.phase) * 0.65;
            const targetWobbleZ = Math.cos(time * 0.00015 + item.phase) * 0.65;
            const easedFlight = easeProgress * 0.72;
            const spriteScale = closeTileScale * (1 + (PHOTO_FLIGHT_SCALE - 1) * easedFlight);
            item.sprite.position.lerpVectors(item.base, item.target, easedFlight);
            item.sprite.position.x += targetWobbleX * easedFlight;
            item.sprite.position.y += targetWobbleY * easedFlight;
            item.sprite.position.z += targetWobbleZ * easedFlight;
            item.sprite.scale.copy(item.originalScale).multiplyScalar(spriteScale);
            (item.sprite.material as THREE.SpriteMaterial).opacity = showPhotos
              ? item.baseOpacity * (0.9 + (Math.sin(clock * 0.72 + item.phase) + 1) * 0.05) * finalBloomRelief
              : 0;
            item.sprite.rotation.x = Math.sin(time * 0.001 * item.drift + item.phase) * 0.028;
            item.sprite.rotation.y = Math.cos(time * 0.001 * item.drift + item.phase) * 0.028;
            item.sprite.rotation.z = Math.sin(time * 0.0008 * item.drift + item.phase) * 0.022;
          });
        }
      }

      if (hoveredSprite) {
        hoveredSprite.scale.multiplyScalar(1.16);
        const material = hoveredSprite.material as THREE.SpriteMaterial;
        material.opacity = Math.min(1, material.opacity + 0.16);
      }

      title.rotation.y = pose.textY + Math.sin(clock * 0.25) * 0.018;
      const titleDistanceScale = THREE.MathUtils.clamp(camera.position.distanceTo(pose.target) / 320, 0.45, 1);
      const titleMobileScale = camera.aspect < 1 ? (cameraSeconds < 2 ? 0.58 : 0.85) : 1;
      title.scale.setScalar(Math.min(titleDistanceScale, titleMobileScale));
      title.position.y = Math.sin(clock * 0.18) * 3;

      auroras.forEach((aurora, index) => {
        const positions = aurora.line.geometry.getAttribute("position") as THREE.BufferAttribute;
        for (let point = 0; point < AURORA_POINT_COUNT; point += 1) {
          const progress = point / AURORA_POINT_COUNT;
          const angle = progress * Math.PI * 2;
          const wave = Math.sin(angle * (1.1 + index * 0.08) + clock * aurora.speed + aurora.phase);
          const secondaryWave = Math.sin(angle * 2.6 - clock * aurora.speed * 0.8 + aurora.phase) * 0.22;
          const xRadius = aurora.radiusX + (wave + secondaryWave) * aurora.amplitude;
          const yRadius = aurora.radiusY + (wave * 0.8 + secondaryWave * 0.4) * aurora.amplitude * 0.6;
          const x = Math.cos(angle) * xRadius;
          const y = Math.sin(angle) * yRadius;
          const z = Math.sin(angle * 2 + aurora.phase) * aurora.amplitude * 0.3;
          positions.setXYZ(point, x, y, z);
        }
        positions.needsUpdate = true;
        const material = aurora.line.material as THREE.LineBasicMaterial;
        material.opacity = 0.12 + (Math.sin(clock * 0.18 + aurora.phase) + 1) * 0.03;
        aurora.line.position.y = aurora.verticalOffset + Math.sin(clock * 0.22 + aurora.phase) * 12;
      });

      renderer.render(scene, camera);
    };
    frame = window.requestAnimationFrame(animate);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    renderer.domElement.removeEventListener("pointermove", onPointerMove);
    renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
    renderer.domElement.removeEventListener("click", onCanvasClick);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("shuffle-photo-tiles", shufflePhotoTiles);
      closeDetail();
    renderer.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose();
        if (mesh.material) {
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach((material) => {
            const texture = (material as THREE.MeshBasicMaterial).map;
            texture?.dispose();
            material.dispose();
          });
        }
      });
    };
  }, []);

  return <div ref={mountRef} className="galaxy-stage" aria-hidden="true" />;
}

export { AUDIO_URL };
