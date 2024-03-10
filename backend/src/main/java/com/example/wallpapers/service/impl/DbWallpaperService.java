package com.example.wallpapers.service.impl;
import com.example.wallpapers.model.Wallpaper;
import com.example.wallpapers.repository.WallpaperRepository;
import com.example.wallpapers.service.WallpaperService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Slf4j
public class DbWallpaperService implements WallpaperService
{
    private final WallpaperRepository wallpaperRepository;
    @Override
    public Wallpaper getWallpaper(String wallpapername) {
        return wallpaperRepository.findByWallpapername(wallpapername).orElseThrow(()->
                new RuntimeException("Wallpaper not found"));
    }

    @Override
    public Wallpaper save(MultipartFile file,String wallpapername,String authorname) throws Exception {
        if(wallpaperRepository.existsByWallpapername(file.getOriginalFilename())) {
            log.info("Wallpaper {} already exists", file.getOriginalFilename());
            return Wallpaper.builder().wallpapername(file.getOriginalFilename()).build();
        }

        var wallpaper =Wallpaper.builder()
                .filename(file.getOriginalFilename())
                .mimeType(file.getContentType())
                .wallpapername(wallpapername)
                .authorname(authorname)
                .data(file.getBytes())
                .build();
        return wallpaperRepository.save(wallpaper);
    }
}
