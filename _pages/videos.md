---
layout: page
permalink: /videos/
title: videos
description: Recorded talks.
nav: true
nav_order: 4
---

<style>
  .video-thumb { position: relative; display: block; max-width: 640px; }
  .video-thumb img { width: 100%; border-radius: 4px; border: 1px solid var(--global-divider-color); background: white; }
  .video-thumb .play {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 72px; height: 72px; border-radius: 50%; background: rgba(0, 0, 0, 0.6);
    display: flex; align-items: center; justify-content: center; transition: background 0.2s;
  }
  .video-thumb .play::after {
    content: ""; margin-left: 6px;
    border-style: solid; border-width: 14px 0 14px 24px; border-color: transparent transparent transparent white;
  }
  .video-thumb:hover .play { background: var(--global-theme-color); }
</style>

{% for v in site.data.videos %}

<div class="video-entry mb-5">
  <h4 class="mb-1">{{ v.title }}</h4>
  <p class="text-muted mb-2">
    {{ v.event }}{% if v.paper %} · <a href="{{ v.paper }}">paper</a>{% endif %}{% if v.slideslive %} · <a href="https://slideslive.com/{{ v.slideslive }}">watch on SlidesLive</a>{% endif %}
  </p>
  {% if v.slideslive %}
  <a class="video-thumb" href="https://slideslive.com/{{ v.slideslive }}" aria-label="Watch {{ v.title }} on SlidesLive">
    <img src="{{ v.thumbnail | relative_url }}" alt="{{ v.title }}" loading="lazy">
    <span class="play"></span>
  </a>
  {% elsif v.youtube %}
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/{{ v.youtube }}" title="{{ v.title }}" allowfullscreen loading="lazy"></iframe>
  </div>
  {% endif %}
</div>
{% endfor %}
