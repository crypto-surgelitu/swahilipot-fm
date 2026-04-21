import urllib.request
import xml.etree.ElementTree as ET
import re
import json

articles = []

def get_feed(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read()
        return ET.fromstring(html)
    except Exception as e:
        print("Failed to fetch", url, e)
        return None

# 1. BBC World News (Tech / Global)
bbc = get_feed('http://feeds.bbci.co.uk/news/world/rss.xml')
if bbc:
    item = bbc.findall('./channel/item')[0]
    title = item.find('title').text
    desc = item.find('description').text
    media = item.find('{http://search.yahoo.com/mrss/}thumbnail')
    img = media.attrib['url'] if media is not None else 'https://picsum.photos/seed/bbc/800/600'
    articles.append({"title": title, "excerpt": desc, "image": img, "category": "Global", "date": "April 21, 2026"})

# 2. Al Jazeera
aj = get_feed('https://www.aljazeera.com/xml/rss/all.xml')
if aj:
    item = aj.findall('./channel/item')[0]
    title = item.find('title').text
    desc = item.find('description').text
    # Al jazeera often embeds image in enclosure or content
    content = item.find('{http://search.yahoo.com/mrss/}content')
    img = content.attrib['url'] if content is not None else 'https://picsum.photos/seed/aj/800/600'
    articles.append({"title": title, "excerpt": desc, "image": img, "category": "World", "date": "April 21, 2026"})

# 3. KBC (Kenya Broadcasting Corporation) or generic RSS for Kenya
kbc = get_feed('https://www.kbc.co.ke/feed/')
if kbc:
    item = kbc.findall('./channel/item')[0]
    title = item.find('title').text
    desc = item.find('description').text
    # Get image from encoded content
    content = item.find('{http://purl.org/rss/1.0/modules/content/}encoded')
    if content is not None and content.text:
       match = re.search(r'src=["\']([^"\']+)["\']', content.text)
       img = match.group(1) if match else 'https://picsum.photos/seed/kbc/800/600'
    else:
       img = 'https://picsum.photos/seed/kbc/800/600'
    
    desc_clean = re.sub('<[^<]+>', '', desc).strip()
    articles.append({"title": title, "excerpt": desc_clean, "image": img, "category": "Kenya", "date": "April 21, 2026"})

print(json.dumps(articles, indent=2))
