---
title: "About OpenLLMStack"
description: "Why I built OpenLLMStack and what you can expect: a single, curated hub for the open source LLM ecosystem."
date: "2026-06-24"
author: "Sherlock Xu"
tags: ["Open Source"]
---

The open source LLM ecosystem moves fast. New flagship models drop weekly, inference engines ship breakthrough optimizations, and agentic frameworks reinvent themselves overnight. Keeping up has become a full-time job, and the signal is scattered across model cards, GitHub repos, arXiv papers, Discord threads, and release blogs.

**[OpenLLMStack](https://openllmstack.com)** is designed to fix that: a single, curated hub for the open source LLM stack so that you can focus on what matters.

## Why another site?

There's no shortage of AI news. What's missing is a place that's curated, current, and practical, one that answers the questions you actually have when you're building:

- Which open models are worth my attention right now?
- How big are they, what's the license, and what context window do they support?
- What does it actually take to serve one? Which GPUs, which inference engine?
- What are the techniques and frameworks I should know about?

This site is built to answer those questions at a glance, without the marketing fluff.

## What's inside

The site is organized around the layers of the modern open LLM stack:

- **[Models](/models)**: the latest open source LLMs, each with parameters, architecture (dense vs. MoE), context window, license, recommended GPU configurations, and one-click links to deployment recipes by major inference engines like vLLM and SGLang.
- **[Inference](/inference)**: the engines and serving frameworks that run these models in production.
- **[Optimizations](/optimizations)**: the techniques that make inference faster and cheaper, from quantization to speculative decoding to prefix caching.
- **[Agents](/agents)**: the frameworks for building agentic applications on top of open models.
- **[Timeline](/timeline)**: an interactive view of the major milestones in open source AI.

Every model card is designed to be actionable. You shouldn't have to dig through a README to find out whether a model fits on your hardware. It's right there on the card, alongside the exact recipes to deploy it.

## What's not included

I don't want to build an encyclopedia. The site doesn't try to explain concepts in depth, like how a model is trained, how an inference engine works under the hood, or the math behind an optimization technique. There are already plenty of papers, docs, and tutorials for that, such as the [LLM Inference Handbook](https://bentoml.com/llm/) (I am also the maintainer).

It also doesn't try to list everything. The ecosystem has thousands of models and hundreds of frameworks and papers, and chasing all of them is exactly the problem this site is meant to solve. Instead of aiming for completeness, the site is curated: it surfaces what matters most right now and points you to the primary sources when you want to go deeper.

In short, it's a starting point and a set of quick links, not the final word. The goal is to save you time, not to replace the great material that already exists.

## What's next

The site will grow alongside the ecosystem it tracks. Expect new models added as they ship and more research coverage. The whole project is open on [GitHub](https://github.com/Sherlock113/OpenLLMStack), so issues, suggestions, and contributions are all welcome.

The best way to keep up with open source AI is to build with it. I hope the site helps you do exactly that.

Thanks for reading, and welcome aboard.
