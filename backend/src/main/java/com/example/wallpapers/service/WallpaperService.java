package com.example.wallpapers.service;

import com.example.wallpapers.model.Wallpaper;
import org.springframework.web.multipart.MultipartFile;

public interface WallpaperService {
    Wallpaper getWallpaper(String wallpapername);

    Wallpaper save(MultipartFile file,String wallpapername,String authorname) throws Exception;
}
