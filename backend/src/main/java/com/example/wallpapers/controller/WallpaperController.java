package com.example.wallpapers.controller;

import com.example.wallpapers.model.Wallpaper;
import com.example.wallpapers.repository.WallpaperRepository;
import com.example.wallpapers.response.SaveResult;
import com.example.wallpapers.service.WallpaperService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.time.Duration;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("https://image-sphere.vercel.app,http://localhost:3000")
public class WallpaperController {
    @Autowired
    private WallpaperRepository wallpaperRepository;

    private final WallpaperService wallpaperService;
    @GetMapping("/wallpapers/db/{wallpapername}")
    public ResponseEntity<Resource> retrieve(@PathVariable String wallpapername) {
        var wallpaper = wallpaperService.getWallpaper(wallpapername);
        var body = new ByteArrayResource(wallpaper.getData());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, wallpaper.getMimeType())
                .body(body);
    }
    @GetMapping("/wallpapers/db/files/{filename}")
    public ResponseEntity<Resource> retrievefile(@PathVariable String filename) {
        var wallpaper = wallpaperService.getFileWallpaper(filename);
        var body = new ByteArrayResource(wallpaper.getData());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, wallpaper.getMimeType())
                .body(body);
    }

    @PostMapping("/wallpapers/db/upload")
    public SaveResult upload(@RequestParam("file") MultipartFile file,@RequestPart String wallpapername,@RequestPart String authorname) {
        try {
            var wallpaper = wallpaperService.save(file,wallpapername,authorname);
            return SaveResult.builder()
                    .error(false)
                    .wallpapername(wallpapername)
                    .authorname(authorname)
                    .link(createWallapaperLink(wallpaper.getFilename()))
                    .build();
        } catch (Exception e) {
            log.error("Failed to save image", e);
            return SaveResult.builder().error(true).wallpapername(file.getOriginalFilename()).build();
        }
    }

//    @PostMapping("/wallpapers/db/multi_upload")
//    public List<SaveResult> multiUpload(@RequestPart List<MultipartFile> files) {
//        return files.stream()
//                .map(this::upload)
//                .collect(Collectors.toList());
//    }

    private String createWallapaperLink(String wallapername) {
        return ServletUriComponentsBuilder.fromCurrentContextPath()
                .replacePath("/wallpapers/db/"+wallapername)
                .toUriString();
    }
//    @PostMapping("/addWallpaper")
//    Wallpaper newWallpaper(@RequestBody Wallpaper newWallpaper) {
//        return wallpaperRepository.save(newWallpaper);
//    }
//
    @GetMapping("/wallpapers")
    List<Wallpaper> getAllWallpapers() {
        return wallpaperRepository.findAll();
    }
}
