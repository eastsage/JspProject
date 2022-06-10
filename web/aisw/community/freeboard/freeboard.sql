-- 자유게시판 freeboard
create database fboard;

create table freeboard(
id 		int primary key,
name 		varchar(10) not null,
password	 	varchar(20) not null,
email 		varchar(50),
subject 		varchar(80) not null,
content 		text not null,
inputdate 	varchar(20) not null,
masterid 		int default 0,
readcount 	int default 0,
replynum 	int default 0,
step 		int default 0
);

-- 자주하는질문 faq
create table faq(
                          id 		int primary key,
                          name 		varchar(10) not null,
                          password	 	varchar(20) not null,
                          email 		varchar(50),
                          subject 		varchar(80) not null,
                          content 		text not null,
                          inputdate 	varchar(20) not null,
                          masterid 		int default 0,
                          readcount 	int default 0,
                          replynum 	int default 0,
                          step 		int default 0
);

-- 질문하기 qna
create table qna(
                          id 		int primary key,
                          name 		varchar(10) not null,
                          password	 	varchar(20) not null,
                          email 		varchar(50),
                          subject 		varchar(80) not null,
                          content 		text not null,
                          inputdate 	varchar(20) not null,
                          masterid 		int default 0,
                          readcount 	int default 0,
                          replynum 	int default 0,
                          step 		int default 0
);

-- 갤러리 gallery
create table gallery(
                          id 		int primary key,
                          name 		varchar(10) not null,
                          password	 	varchar(20) not null,
                          email 		varchar(50),
                          subject 		varchar(80) not null,
                          content 		text not null,
                          inputdate 	varchar(20) not null,
                          masterid 		int default 0,
                          readcount 	int default 0,
                          replynum 	int default 0,
                          step 		int default 0
);

-- 서식자료실 dataroom
create table dataroom(
                          id 		int primary key,
                          name 		varchar(10) not null,
                          password	 	varchar(20) not null,
                          email 		varchar(50),
                          subject 		varchar(80) not null,
                          content 		text not null,
                          inputdate 	varchar(20) not null,
                          masterid 		int default 0,
                          readcount 	int default 0,
                          replynum 	int default 0,
                          step 		int default 0
);

