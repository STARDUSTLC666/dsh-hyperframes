/**
 * dsh-hyperframes: packaged video skills with disk and registry health checks.
 * The portable implementation lives in skill-bundle.ts; this entry only
 * supplies the package identity, skill names and resource directory.
 */
import { fileURLToPath } from 'node:url';
import { createSkillBundle } from './skill-bundle.js';
export { parseSkillFile } from './skill-bundle.js';
export const name = 'hyperframes-skills';
export const inject = ['skills', 'tools'];
export const SKILL_NAMES = [
    "embedded-captions",
    "faceless-explainer",
    "figma",
    "general-video",
    "hyperframes",
    "hyperframes-animation",
    "hyperframes-audio",
    "hyperframes-cli",
    "hyperframes-core",
    "hyperframes-creative",
    "hyperframes-keyframes",
    "hyperframes-registry",
    "media-use",
    "motion-graphics",
    "music-to-video",
    "pr-to-video",
    "product-launch-video",
    "remotion-to-hyperframes",
    "slideshow",
    "talking-head-recut",
];
/** Absolute resource root shipped in this independently installable package. */
export function bundledSkillsDir() {
    return fileURLToPath(new URL('../skills/', import.meta.url));
}
const bundle = createSkillBundle({
    plugin: 'dsh-hyperframes',
    healthTool: 'hyperframes_health',
    names: SKILL_NAMES,
    directory: bundledSkillsDir,
});
/** Re-read and validate disk resources; runtime state is checked by the health tool. */
export function checkBundledSkills() { return bundle.checkFiles(); }
/** Register this package's skills and its read-only health tool. */
export function apply(ctx) { bundle.apply(ctx); }
