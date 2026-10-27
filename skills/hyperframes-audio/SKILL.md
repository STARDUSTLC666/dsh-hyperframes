---
name: hyperframes-audio
description: Compatibility entry for the retired hyperframes-audio skill; routes to the current official media-use skill.
---

# hyperframes-audio: compatibility entry

The current official HyperFrames release merged this workflow into the `media-use` skill. Load `media-use` from the DSH skill registry and follow its current instructions for the user's task. Use its bundled resources; do not reconstruct the retired workflow or download standalone skills.

For an existing project, preserve its files and dependencies. DSH plugin management owns this installed skill bundle. The upstream plugin launcher pins HyperFrames 0.8.207 and suppresses standalone skill installation; run it in the user's project directory. This entry preserves the previous DSH skill name while using the current workflow.
