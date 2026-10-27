---
name: music-to-video
description: Compatibility entry for the retired music-to-video skill; routes to the current official hyperframes skill.
---

# music-to-video: compatibility entry

The current official HyperFrames release merged this workflow into the `hyperframes` skill. Load `hyperframes` from the DSH skill registry and follow its current instructions for the user's task. Use its bundled resources; do not reconstruct the retired workflow or download standalone skills.

For an existing project, preserve its files and dependencies. DSH plugin management owns this installed skill bundle. The upstream plugin launcher pins HyperFrames 0.8.207 and suppresses standalone skill installation; run it in the user's project directory. This entry preserves the previous DSH skill name while using the current workflow.
