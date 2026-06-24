---
name: "MiMo-V2.5-Pro"
org: "Xiaomi"
logo: "/logos/mimo.webp"
params: "1.02T (42B active)"
license: "MIT"
releaseDate: "2026-04"
description: "Xiaomi's largest MoE with 1.02T total parameters and 1M context. Designed for long-context reasoning and agent workloads. Requires 2-node 8× H200 deployment."
url: "https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro"
tags: ["MoE", "1M context", "Long context"]
family: "MiMo"
architecture: "MoE"
activeParams: "42B"
contextLength: "1M"
modality: "Text"
attentionArchitecture: "Hybrid Attention"
precisions: ["FP8"]
deployment: ["2-node 8× H200"]
useCase: "Long-context reasoning and agent workloads"
huggingfacePath: "XiaomiMiMo/MiMo-V2.5-Pro"
intro: "MiMo-V2.5-Pro is Xiaomi's largest open-source model — a 1.02T-parameter Mixture-of-Experts with 42B active per token, built on a hybrid-attention architecture with a 1M-token context window. Open-sourced under the MIT license on April 27, 2026, it targets long-context reasoning and agent workloads, deploying at FP8 precision across a 2-node 8× H200 setup."
vllmRecipe: "https://recipes.vllm.ai/XiaomiMiMo/MiMo-V2.5-Pro"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/Xiaomi/MiMo-V2.5"
releaseBlog: "https://mimo.xiaomi.com/mimo-v2-5-pro/"
blogPosts:
  - title: "Xiaomi MiMo-V2.5-Pro: Full Review & Benchmarks"
    url: "https://www.buildfastwithai.com/blogs/xiaomi-mimo-v2-5-pro-review-2026"
  - title: "How to Use MiMo-V2.5-Pro: Complete Guide to Xiaomi's New 1T MoE Model"
    url: "https://tosea.ai/blog/mimo-v2-5-pro-complete-guide"
  - title: "Xiaomi releases MiMo-V2.5 and MiMo-V2.5-Pro open-source AI models with MoE architecture"
    url: "https://www.fonearena.com/blog/481186/xiaomi-mimo-2-5-features.html"
---
