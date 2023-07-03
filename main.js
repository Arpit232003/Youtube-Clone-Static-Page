function changecontent(vidlink,title,views){
    document.getElementById("mainvideo").src = vidlink;
    document.getElementById("vidtitle").innerHTML = title;
    document.getElementById("vidviews").innerHTML = views;
}