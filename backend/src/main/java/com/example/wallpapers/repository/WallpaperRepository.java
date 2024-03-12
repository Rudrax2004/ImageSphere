package com.example.wallpapers.repository;

import com.example.wallpapers.model.Wallpaper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.*;
import java.util.Optional;

public interface WallpaperRepository extends JpaRepository<Wallpaper,Integer> {
    Optional<Wallpaper> findByWallpapername(String wallpapername);
    Optional<Wallpaper> findByFilename(String filename);
    boolean existsByWallpapername(String wallpapername);
}
