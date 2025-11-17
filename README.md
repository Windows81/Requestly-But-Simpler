# Requestly, but Simplified

In its current state, Requestly is pretty complicated and convoluted.

A cursory browse through Requestly's code-base tells you that it's built atop lots of TypeScript tools. It uses React for GUIs, which then gets tightly packaged using Rollup.

I should not need to open https://app.requestly.io/rules/my-rules every time I need to modify any settings. That should be the local extension's job.

So far, **I am only working on the Manifest-V2** extension, which was removed from the codebase in May 2025. Most Chromium-based browsers shouldn't mind using MV2, but do avoid using Google Chrome if you can.

My changes mainly consist of re-arranging modules, though I did have to re-write then transpile some TypeScript code using `tsc -b`.
