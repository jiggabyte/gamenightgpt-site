---
title: "All Posts"
layout: base.njk
---

# All Posts
<ul>
  {%- for post in collections.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title or post.fileSlug }}</a>
      {%- if post.date %}
        <span style="color:#888;font-size:0.95em;">
          ({{ post.date | dateToRfc3339 | slice(0,10) }})
        </span>
      {%- endif %}
    </li>
  {%- endfor %}
</ul>
