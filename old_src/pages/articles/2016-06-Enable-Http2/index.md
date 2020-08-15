---
title: "How I enabled HTTP2 on my vServer (and so can you)"
date: "2016-06-11T12:00:00.000Z"
layout: post
path: "/enable-http2/"
category: "DevOps"
description: "How I overcame obstacles activating HTTP2 on my vServer using a setup of nginx in a docker container environment"
author: "@kriswep"
readNext: "/articles/2017-02-Testing-indexjs/"
issueNumber: 8
---

#### even on newer versions off chrome >51

**Tl,dr: Activitating HTTP2 on your server (if you have more than a simple hosted webspace) is not that hard, but there are some caveats to it. Here I describe how I overcame them using a setup of nginx in a docker container environment.**

In case any of you missed it: There is a new version of the protocol that empowers the web, and it is called [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2). Biggest advantage is propably performance gains due to its capability to request resources in parallel. You might want to enable it on your server. Doing that is not that hard as one might think, but there are some kind of big prerequisites to it.

First it, you might need access to your webservers configuration, which most of the times means you need to have shell access and root rights. And you should now how to use them.

The next thing is, you need to have https configured. Here are some tips how to do that for [nginx](http://nginx.org/en/docs/http/configuring_https_servers.html).

Then, if you want to delight users with newest Chrome with HTTP/2 there is an additional problem: Google recently has disabled the commonly used protocol NPN, which in a nutshell decides if to use HTTP/1.1 or /2, in their browser Chrome. The supported alternative ALPN requires the newest version of OpenSSL 1.0.2\. Today, in June 2016, that is not shipped by default in most server OS. You can read more about that in Mattias Geniar’s excellent post [here](https://ma.ttias.be/day-google-chrome-disables-http2-nearly-everyone-may-31st-2016/).

On my vServer I have a setup with a docker nginx container as a proxy, which redirects HTTP requests to other docker containers or serves them directly from file system. I can change nginx’s configuration files manuelly, whenever I want. And I have enabled HTTPS access to most enpoints with free certificates from [Let’s encrypt](https://letsencrypt.org/). So I’m good to go.

Enabling HTTP/2 is as easy as setting this lines in the nginx config at the proper positions:

<pre name="25df" id="25df" class="graf graf--pre graf-after--p">listen 443 ssl http2 default_server;
listen [::]:443 ssl http2 default_server;</pre>

(Note the ‘http2’ in there).

That was easy enough, but due to the mentioned change from Google doesn’t work in Chrome. Please note that nothing really breaks in Chrome 51+ or any older browsers, they just use plain ol’ HTTP/1.1.

I use the official nginx docker image [nginx:latest](https://hub.docker.com/_/nginx/) for my setup. That is based on Debian Jessie and so doesn’t ship with OpenSSL 1.0.2\. The workaround is to use the image tag nginx:alpina. This tag is based on [Alpine linux](http://alpinelinux.org/), it ‘installs’ the same version of nginx than the latest tag, but it can handle the ALPN protocol as well. That means, now even Chromes user can benefit from HTTP2 (again)!

<sub><sup>Side: This article was originally published at [Medium](https://medium.com/@kriswep/how-i-enabled-http2-on-my-vserver-and-so-can-you-ce91bdc5a959).</sup></sub>
