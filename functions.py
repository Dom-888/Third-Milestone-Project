"""
Convert standard Youtube URLs into their embedded versions,
accept one of the following format:
- https://www.youtube.com/watch?v=G_sskTsokZ0
- https://www.youtube.com/watch?v=G_sskTsokZ0&feature=youtu.be
- https://www.youtube.com/embed/G_sskTsokZ0
- https://youtu.be/G_sskTsokZ0
- https://youtu.be/G_sskTsokZ0?t=15
- http://y2u.be/G_sskTsokZ0
And return this:
- https://www.youtube.com/embed/G_sskTsokZ0
"""

def convert_url(url):
    if url[:24] == "https://www.youtube.com/": 
        url = url[:43] 
    elif url[:17] == "https://youtu.be/":
        url = url[:28]
    video_id = url[-11:]
    embedded_url = "https://www.youtube.com/embed/" + video_id
    return embedded_url

