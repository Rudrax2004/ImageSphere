create table if not exists wallpaper
    (
    id serial primary key,
    filename varchar(255) unique,
    wallpapername varchar(100) unique,
    authorname varchar(100),
    mime_type varchar(30),
    data bytea );
