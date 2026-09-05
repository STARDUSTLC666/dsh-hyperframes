import { type SkillsPluginContext } from './skill-bundle.js';
export { parseSkillFile } from './skill-bundle.js';
export type { SkillRegistration, SkillsPluginContext } from './skill-bundle.js';
export declare const name = "hyperframes-skills";
export declare const inject: string[];
export declare const SKILL_NAMES: readonly ["embedded-captions", "faceless-explainer", "figma", "general-video", "hyperframes", "hyperframes-animation", "hyperframes-audio", "hyperframes-cli", "hyperframes-core", "hyperframes-creative", "hyperframes-keyframes", "hyperframes-registry", "media-use", "motion-graphics", "music-to-video", "pr-to-video", "product-launch-video", "remotion-to-hyperframes", "slideshow", "talking-head-recut"];
/** Absolute resource root shipped in this independently installable package. */
export declare function bundledSkillsDir(): string;
/** Re-read and validate disk resources; runtime state is checked by the health tool. */
export declare function checkBundledSkills(): import("./skill-bundle.js").SkillFileCheck[];
/** Register this package's skills and its read-only health tool. */
export declare function apply(ctx: SkillsPluginContext): void;
