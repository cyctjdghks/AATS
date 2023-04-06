-- --------------------------------------------------------
-- 호스트:                          j8d102.p.ssafy.io
-- 서버 버전:                        10.11.2-MariaDB-1:10.11.2+maria~ubu2204 - mariadb.org binary distribution
-- 서버 OS:                        debian-linux-gnu
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- d102 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `d102` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `d102`;

-- 테이블 d102.cctv 구조 내보내기
CREATE TABLE IF NOT EXISTS `cctv` (
  `cctv_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `cctv_information` varchar(255) DEFAULT NULL,
  `cctv_lat` double DEFAULT NULL,
  `cctv_lng` double DEFAULT NULL,
  `organization_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cctv_no`),
  KEY `FK1rjsf369nani3qhymhbtm351b` (`organization_id`),
  CONSTRAINT `FK1rjsf369nani3qhymhbtm351b` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.cctv:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `cctv` DISABLE KEYS */;
/*!40000 ALTER TABLE `cctv` ENABLE KEYS */;

-- 테이블 d102.count_based_membership 구조 내보내기
CREATE TABLE IF NOT EXISTS `count_based_membership` (
  `type_2_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `count` int(11) NOT NULL,
  `membership_no` bigint(20) NOT NULL,
  PRIMARY KEY (`type_2_no`),
  UNIQUE KEY `UK_9lpa411ep4np1rniksrv2ibx9` (`membership_no`),
  CONSTRAINT `FK2g2cjt94dli3sp8x37rhmo4xn` FOREIGN KEY (`membership_no`) REFERENCES `membership` (`membership_no`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.count_based_membership:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `count_based_membership` DISABLE KEYS */;
INSERT IGNORE INTO `count_based_membership` (`type_2_no`, `count`, `membership_no`) VALUES
	(2, 10, 1);
/*!40000 ALTER TABLE `count_based_membership` ENABLE KEYS */;

-- 테이블 d102.image 구조 내보내기
CREATE TABLE IF NOT EXISTS `image` (
  `image_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `original_file_name` varchar(255) DEFAULT NULL,
  `stored_file_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.image:~11 rows (대략적) 내보내기
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT IGNORE INTO `image` (`image_id`, `created_at`, `updated_at`, `file_size`, `original_file_name`, `stored_file_name`) VALUES
	(1, '2023-03-29 11:20:41.770812', '2023-03-29 11:20:41.770812', 13895, '이병수 On Line up load용 &#40;3-4cm&#41;.jpg', 'images/20230329/1680732353204700.jpg'),
	(2, '2023-03-29 11:32:38.494109', '2023-03-29 11:32:38.494109', 17327, '양서정_증명사진.jpg', 'images/20230329/1681449103921296.jpg'),
	(3, '2023-03-29 12:14:24.935606', '2023-03-29 12:14:24.935606', 41997, 'aive2.png', 'images/20230329/1683955544929435.png'),
	(4, '2023-03-29 12:14:51.868899', '2023-03-29 12:14:51.868899', 41997, 'aive2.png', 'images/20230329/1683982478372452.png'),
	(5, '2023-03-29 12:18:26.828670', '2023-03-29 12:18:26.828670', 41997, 'aive2.png', 'images/20230329/1684197438462996.png'),
	(6, '2023-03-31 00:47:13.368403', '2023-03-31 00:47:13.368403', 99796, 'ceo.png', 'images/20230331/1815523931758279.png'),
	(7, '2023-03-31 01:34:43.160508', '2023-03-31 01:34:43.160508', 13871, '박성환 사진.jpg', 'images/20230331/1818373770328940.jpg'),
	(8, '2023-03-31 04:40:09.307272', '2023-03-31 04:40:09.307272', 12366, '이창민.jpg', 'images/20230331/1829499917112301.jpg'),
	(9, '2023-03-31 04:44:39.206886', '2023-03-31 04:44:39.206886', 50351, '강모현.PNG', 'images/20230331/1829769816646406.png'),
	(10, '2023-03-31 06:37:35.965471', '2023-03-31 06:37:35.965471', 13895, '이병수 On Line up load용 &#40;3-4cm&#41;.jpg', 'images/20230331/1836546535073271.jpg'),
	(11, '2023-03-31 06:39:28.851936', '2023-03-31 06:39:28.851936', 13895, '이병수 On Line up load용 &#40;3-4cm&#41;.jpg', 'images/20230331/1836659461719330.jpg'),
	(12, '2023-03-31 06:40:35.965943', '2023-03-31 06:40:35.965943', 13895, '이병수 On Line up load용 &#40;3-4cm&#41;.jpg', 'images/20230331/1836726575805353.jpg'),
	(13, '2023-03-31 08:18:10.701479', '2023-03-31 08:18:10.701479', 21408, '가짜박재현.png', 'images/20230331/1842581290288609.png');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;

-- 테이블 d102.membership 구조 내보내기
CREATE TABLE IF NOT EXISTS `membership` (
  `membership_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `membership_type` int(11) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`membership_no`),
  UNIQUE KEY `UK_7ax6kj56u4dbtiqmmec1vubqb` (`user_id`),
  CONSTRAINT `FKjp7ht675da9n751xycuwii77s` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.membership:~1 rows (대략적) 내보내기
/*!40000 ALTER TABLE `membership` DISABLE KEYS */;
INSERT IGNORE INTO `membership` (`membership_no`, `membership_type`, `user_id`) VALUES
	(1, 1, 'JongHyeon'),
	(2, 0, 'byoung1997');
/*!40000 ALTER TABLE `membership` ENABLE KEYS */;

-- 테이블 d102.organization 구조 내보내기
CREATE TABLE IF NOT EXISTS `organization` (
  `organization_id` varchar(50) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `organization_lat` double DEFAULT NULL,
  `organization_lng` double DEFAULT NULL,
  `organization_name` varchar(10) NOT NULL,
  `organization_pw` varchar(70) NOT NULL,
  PRIMARY KEY (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.organization:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT IGNORE INTO `organization` (`organization_id`, `created_at`, `updated_at`, `organization_lat`, `organization_lng`, `organization_name`, `organization_pw`) VALUES
	('Haniel', '2023-03-30 00:03:42.362045', '2023-03-30 00:03:42.362045', 36.106740412395105, 128.41818196722724, '하니엘', '$2a$10$8/9S8Mo.SCax60pcz.M8kuMKEoLlpxruT7NtZUc/RB0mkrwOrsSii'),
	('sodam', '2023-03-29 11:19:26.090414', '2023-03-29 11:19:26.090414', 36.1031605728813, 128.41971108995043, '소담빌', '$2a$10$swjXAfCa7xibK0PJlhCfxuIITEjWJ6bnSr2xBZsf19bzBhRB9E.AW'),
	('ssafy', '2023-03-29 08:11:31.981748', '2023-04-03 16:00:01.797378', NULL, NULL, '김싸피', '$2a$10$t/Fh97LDSgqX3loa7VDzh.uhU4moB8A74GK3ga/n16YaZs3DTLAau'),
	('ssafyd102', '2023-03-29 17:07:31.487693', '2023-03-29 17:07:58.697925', 1.123, 1.123, '정신없조', '$2a$10$7uV2Kt1fiIEFZT79r19MKOKPB3pDafxVrY7HT/8H.PcbtcP5Z7DeC'),
	('sunghwanhouse', '2023-03-31 08:14:57.194599', '2023-03-31 08:14:57.194599', 35.80830605616144, 128.53776340144108, '성환이집', '$2a$10$7TYd1HNv86VK8HHE3YCfY.dTLvmNMQQQ5hFE7DD3rqFsRPmsTq55q');
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;

-- 테이블 d102.time_limited_membership 구조 내보내기
CREATE TABLE IF NOT EXISTS `time_limited_membership` (
  `type_1_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `end_time` datetime(6) NOT NULL,
  `start_time` datetime(6) NOT NULL,
  `membership_no` bigint(20) NOT NULL,
  PRIMARY KEY (`type_1_no`),
  UNIQUE KEY `UK_qo9fthfdjot6mduv5crvus857` (`membership_no`),
  CONSTRAINT `FKjxi9k6rtixn86stoxe9xpalwj` FOREIGN KEY (`membership_no`) REFERENCES `membership` (`membership_no`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.time_limited_membership:~1 rows (대략적) 내보내기
/*!40000 ALTER TABLE `time_limited_membership` DISABLE KEYS */;
INSERT IGNORE INTO `time_limited_membership` (`type_1_no`, `end_time`, `start_time`, `membership_no`) VALUES
	(2, '2023-03-27 15:54:00.000000', '2023-03-07 15:54:00.000000', 2);
/*!40000 ALTER TABLE `time_limited_membership` ENABLE KEYS */;

-- 테이블 d102.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` varchar(50) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `user_age` int(11) DEFAULT NULL,
  `user_birth` varchar(10) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_gender` int(11) DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_nationality` varchar(100) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_pwd` varchar(70) NOT NULL,
  `user_status` int(11) NOT NULL,
  `image_id` bigint(20) DEFAULT NULL,
  `organization_id` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_i5xeor1kbd7mof6edpvkp3wsd` (`image_id`),
  KEY `FKi3ynrf4qjomj2hdjx7ssa3mlh` (`organization_id`),
  CONSTRAINT `FK9hpx11qlu8cqhrkjn0yor93h` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`),
  CONSTRAINT `FKi3ynrf4qjomj2hdjx7ssa3mlh` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.user:~8 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT IGNORE INTO `user` (`user_id`, `created_at`, `updated_at`, `user_age`, `user_birth`, `user_email`, `user_gender`, `user_name`, `user_nationality`, `user_phone`, `user_pwd`, `user_status`, `image_id`, `organization_id`) VALUES
	('byoung1997', '2023-03-29 11:20:41.900919', '2023-04-03 07:00:37.749654', 73, '1997-11-05', 'byoung1997s4@gmail.com', 1, '이병수', '한국', '010-9928-5982', '$2a$10$q3iI15mNs8QfZA4PPuoUMOjqwXuxreC9sHRwnpKcAF.LZaHVwSCp.', 0, 1, 'sodam'),
	('changmin', '2023-03-31 04:40:09.407652', '2023-03-31 04:40:09.407652', 73, '1996-01-01', 'changmin@ssafy.com', 1, '이창민', '중국', '010-1234-5982', '$2a$10$Cku94A6GxUmEyevgDi4rjuC16pznwBcwHXPtjhoZwXXSQ1Iohl9t6', 0, 8, 'sodam'),
	('cyctjdghks', '2023-03-31 01:34:43.272412', '2023-03-31 06:11:01.577823', 28, '1996-09-29', 'sdsdfsdf@gmail.com', 1, '박성환', '일본', '010-4918-2230', '$2a$10$q3iI15mNs8QfZA4PPuoUMOjqwXuxreC9sHRwnpKcAF.LZaHVwSCp.', 0, 7, 'sodam'),
	('jaehyeon', '2023-03-31 08:18:10.821134', '2023-03-31 08:30:20.874088', NULL, '2023-03-08', 'jhp1276@naver.com', 1, '박재현', '한국', '010-9269-7217', '$2a$10$zCOuW9MShTWdQiuNQzA3GO3peSIsICQI.tIhb3Hh0Azgg2HsxIs9m', 0, 13, 'sunghwanhouse'),
	('JongHyeon', '2023-03-29 17:08:11.162382', '2023-04-03 15:54:56.868606', 26, '1996-09-29', 'cyctjdghks@naver.com', 1, '최종현', 'Republic of Korea', '010-4918-2239', '$2a$10$Jxm4jdCfvWLM2K9qzWZMT.YclZGEsIzgF.2eDKjzKiADicezcHUtW', 0, NULL, 'ssafyd102'),
	('kangmh', '2023-03-31 04:44:39.306952', '2023-03-31 04:44:39.306952', 28, '1996-01-01', 'kang@ssafy.com', 1, '강모현', '한국', '010-1557-5959', '$2a$10$mxRFlsQ/BJav2pGymW.RTeZCu0xTmVFq2ehyqoPmgPb4.YLMpMmGy', 0, 9, 'sodam'),
	('yangayng', '2023-03-31 00:47:13.531030', '2023-03-31 00:47:13.531030', 73, '2023-03-31', 'seojeong@daum.net', 0, '양서정', '한국', '010-1234-5678', '$2a$10$4C3OAEaRbBnECANPcxdzIu4G7PUPqsmlyUBQsOVxj5/nY5D0ws.l.', 0, 6, 'Haniel'),
	('yangyang', '2023-03-29 11:32:38.604074', '2023-04-02 01:42:02.592440', 73, '1998-10-16', 'yangyang@gmail.com', 0, '양서정', '미국', '010-1234-5982', '$2a$10$86KknsBujosuqpIC0hSyd.8tUF37cVfhBC52ZeIbYyHsQBa9feaMm', 0, 2, 'sodam');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 테이블 d102.user_attendance_end 구조 내보내기
CREATE TABLE IF NOT EXISTS `user_attendance_end` (
  `end_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `end_time` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`end_no`),
  KEY `FK49gr5yb4b82lw66qs2vky6r4a` (`user_id`),
  CONSTRAINT `FK49gr5yb4b82lw66qs2vky6r4a` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.user_attendance_end:~51 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user_attendance_end` DISABLE KEYS */;
INSERT IGNORE INTO `user_attendance_end` (`end_no`, `end_time`, `user_id`) VALUES
	(1, '2023-03-29 23:42:39', 'JongHyeon'),
	(2, '2023-03-31 06:11:01', 'cyctjdghks'),
	(3, '2023-03-31 06:11:03', 'cyctjdghks'),
	(4, '2023-03-31 06:11:03', 'cyctjdghks'),
	(5, '2023-03-31 06:11:04', 'cyctjdghks'),
	(6, '2023-03-31 06:11:04', 'cyctjdghks'),
	(7, '2023-03-31 06:11:04', 'cyctjdghks'),
	(8, '2023-03-31 06:11:05', 'cyctjdghks'),
	(9, '2023-03-31 06:11:05', 'cyctjdghks'),
	(10, '2023-03-31 06:11:05', 'cyctjdghks'),
	(11, '2023-03-31 06:11:06', 'cyctjdghks'),
	(12, '2023-03-31 06:11:06', 'cyctjdghks'),
	(13, '2023-03-31 06:11:09', 'cyctjdghks'),
	(14, '2023-03-31 06:11:13', 'cyctjdghks'),
	(15, '2023-03-31 06:11:17', 'cyctjdghks'),
	(16, '2023-03-31 06:11:18', 'cyctjdghks'),
	(17, '2023-03-31 06:11:21', 'cyctjdghks'),
	(18, '2023-03-31 08:30:20', 'jaehyeon'),
	(19, '2023-03-31 08:30:21', 'jaehyeon'),
	(20, '2023-03-31 08:30:21', 'jaehyeon'),
	(21, '2023-03-31 08:30:22', 'jaehyeon'),
	(23, '2023-02-10 18:00:21', 'byoung1997'),
	(26, '2023-02-13 18:00:21', 'byoung1997'),
	(27, '2023-02-14 18:01:22', 'byoung1997'),
	(28, '2023-02-15 18:02:23', 'byoung1997'),
	(29, '2023-02-16 18:03:24', 'byoung1997'),
	(30, '2023-02-17 18:04:25', 'byoung1997'),
	(33, '2023-02-20 18:07:28', 'byoung1997'),
	(34, '2023-02-21 18:50:29', 'byoung1997'),
	(35, '2023-02-22 18:24:31', 'byoung1997'),
	(36, '2023-02-23 18:34:23', 'byoung1997'),
	(37, '2023-02-24 18:36:26', 'byoung1997'),
	(41, '2023-03-03 18:00:21', 'byoung1997'),
	(42, '2023-03-14 18:01:22', 'byoung1997'),
	(43, '2023-03-15 18:02:23', 'byoung1997'),
	(44, '2023-03-16 18:03:24', 'byoung1997'),
	(45, '2023-03-17 18:04:25', 'byoung1997'),
	(48, '2023-03-20 18:07:28', 'byoung1997'),
	(49, '2023-03-21 18:50:29', 'byoung1997'),
	(50, '2023-03-22 18:24:31', 'byoung1997'),
	(51, '2023-03-23 18:34:23', 'byoung1997'),
	(52, '2023-03-24 18:36:26', 'byoung1997'),
	(56, '2023-04-03 06:25:39', 'byoung1997'),
	(57, '2023-04-03 06:30:10', 'byoung1997'),
	(58, '2023-04-03 06:34:13', 'byoung1997'),
	(59, '2023-04-03 06:36:13', 'byoung1997'),
	(60, '2023-04-03 06:37:49', 'byoung1997'),
	(61, '2023-04-03 06:40:05', 'byoung1997'),
	(62, '2023-04-03 06:43:22', 'byoung1997'),
	(63, '2023-04-04 00:53:41', 'JongHyeon'),
	(64, '2023-04-03 15:54:56', 'JongHyeon'),
	(65, '2023-04-03 16:00:37', 'byoung1997');
/*!40000 ALTER TABLE `user_attendance_end` ENABLE KEYS */;

-- 테이블 d102.user_attendance_start 구조 내보내기
CREATE TABLE IF NOT EXISTS `user_attendance_start` (
  `start_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `start_time` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`start_no`),
  KEY `FKje6sjcf3rcaa2e1jwvwdl26rt` (`user_id`),
  CONSTRAINT `FKje6sjcf3rcaa2e1jwvwdl26rt` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.user_attendance_start:~41 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user_attendance_start` DISABLE KEYS */;
INSERT IGNORE INTO `user_attendance_start` (`start_no`, `start_time`, `user_id`) VALUES
	(1, '2023-03-29 23:42:12', 'JongHyeon'),
	(2, '2023-03-31 06:09:34', 'cyctjdghks'),
	(3, '2023-03-31 06:09:35', 'cyctjdghks'),
	(4, '2023-03-31 06:09:36', 'cyctjdghks'),
	(5, '2023-03-31 06:09:36', 'cyctjdghks'),
	(6, '2023-03-31 06:09:38', 'cyctjdghks'),
	(7, '2023-03-31 17:17:16', 'JongHyeon'),
	(8, '2023-03-31 08:30:12', 'jaehyeon'),
	(9, '2023-03-31 08:30:13', 'jaehyeon'),
	(10, '2023-03-31 08:30:14', 'jaehyeon'),
	(12, '2023-02-13 08:00:21', 'byoung1997'),
	(13, '2023-02-14 08:01:22', 'byoung1997'),
	(14, '2023-02-15 08:02:23', 'byoung1997'),
	(15, '2023-02-16 08:03:24', 'byoung1997'),
	(16, '2023-02-17 08:04:25', 'byoung1997'),
	(19, '2023-02-20 08:07:28', 'byoung1997'),
	(20, '2023-02-21 08:50:29', 'byoung1997'),
	(21, '2023-02-22 08:24:31', 'byoung1997'),
	(22, '2023-02-23 08:34:23', 'byoung1997'),
	(23, '2023-02-24 08:36:26', 'byoung1997'),
	(27, '2023-03-03 08:00:21', 'byoung1997'),
	(28, '2023-03-14 08:01:22', 'byoung1997'),
	(29, '2023-03-15 08:02:23', 'byoung1997'),
	(30, '2023-03-16 08:03:24', 'byoung1997'),
	(31, '2023-03-17 08:04:25', 'byoung1997'),
	(34, '2023-03-20 08:07:28', 'byoung1997'),
	(35, '2023-03-21 08:50:29', 'byoung1997'),
	(36, '2023-03-22 08:24:31', 'byoung1997'),
	(37, '2023-03-23 08:34:23', 'byoung1997'),
	(38, '2023-03-24 08:36:26', 'byoung1997'),
	(42, '2023-04-03 06:25:33', 'byoung1997'),
	(43, '2023-04-03 06:30:08', 'byoung1997'),
	(44, '2023-04-03 06:34:11', 'byoung1997'),
	(45, '2023-04-03 06:36:11', 'byoung1997'),
	(46, '2023-04-03 06:37:46', 'byoung1997'),
	(47, '2023-04-03 06:40:07', 'byoung1997'),
	(48, '2023-04-03 06:43:19', 'byoung1997'),
	(49, '2023-04-03 06:48:03', 'byoung1997'),
	(50, '2023-04-04 00:53:39', 'JongHyeon'),
	(51, '2023-04-03 15:54:54', 'JongHyeon'),
	(52, '2023-04-03 16:00:35', 'byoung1997');
/*!40000 ALTER TABLE `user_attendance_start` ENABLE KEYS */;

-- 테이블 d102.worker 구조 내보내기
CREATE TABLE IF NOT EXISTS `worker` (
  `worker_id` varchar(50) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `worker_age` int(11) DEFAULT NULL,
  `worker_brith` varchar(10) DEFAULT NULL,
  `worker_email` varchar(100) DEFAULT NULL,
  `worker_gender` int(11) DEFAULT NULL,
  `worker_name` varchar(10) NOT NULL,
  `worker_nationality` varchar(100) DEFAULT NULL,
  `worker_phone` varchar(20) DEFAULT NULL,
  `worker_pw` varchar(70) NOT NULL,
  `worker_status` int(11) NOT NULL,
  `image_id` bigint(20) DEFAULT NULL,
  `organization_id` varchar(50) NOT NULL,
  PRIMARY KEY (`worker_id`),
  UNIQUE KEY `UK_baq3oh1jnp5q4t0fdjv67rk0f` (`image_id`),
  KEY `FK3xdn5wjjf1ym7i9wf7eu6198b` (`organization_id`),
  CONSTRAINT `FK3xdn5wjjf1ym7i9wf7eu6198b` FOREIGN KEY (`organization_id`) REFERENCES `organization` (`organization_id`),
  CONSTRAINT `FKsk5jpc6c2o8dx8qsmfigh2lam` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.worker:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
INSERT IGNORE INTO `worker` (`worker_id`, `created_at`, `updated_at`, `worker_age`, `worker_brith`, `worker_email`, `worker_gender`, `worker_name`, `worker_nationality`, `worker_phone`, `worker_pw`, `worker_status`, `image_id`, `organization_id`) VALUES
	('byoung1997', '2023-03-31 06:40:36.085508', '2023-04-03 07:00:45.472166', 27, '1997-11-05', 'byoung1997s4@gmail.com', 1, '이병수', '대한민국', '010-9928-5982', '$2a$10$33Xmh2yJQ9tSHAAekm3Er.kcnWfe.DKHrnzOyxy3EN9/rmuAS2odu', 0, 12, 'sodam'),
	('Jay', '2023-03-30 16:19:26.171310', '2023-03-30 16:19:26.171310', 26, '1998-01-31', 'chn9801@naver.com', 1, '최종현', 'ROK', '010-2500-3023', '$2a$10$CTe/KeeGBY44k6e7fxaO1uOb3/0RicwJqt3rqSOdHIvE4M/VgknKO', 0, NULL, 'sodam'),
	('JongHyeon', '2023-03-30 16:14:35.473089', '2023-04-03 15:51:24.167838', 26, '1998-01-31', 'chn9801@naver.com', 1, '최종현', 'ROK', '010-2500-3023', '$2a$10$iFTqBpUZ04J/XFPCz.qpreAxxiglGcVCd9QdiwB4OPkdTstBUWRmi', 0, NULL, 'sodam'),
	('mrPark', '2023-03-29 12:18:26.938668', '2023-03-29 12:18:26.938668', 28, '1996-03-03', 'mrPark@ssafy.com', 1, '박재현', '대한민국', '010-1234-9876', '$2a$10$ekCIDUOJN3xOK1z5PPGELOZRbszR6pAqjxqaa4NA6L461SPDjU1wK', 0, 5, 'sodam');
/*!40000 ALTER TABLE `worker` ENABLE KEYS */;

-- 테이블 d102.worker_attendance_end 구조 내보내기
CREATE TABLE IF NOT EXISTS `worker_attendance_end` (
  `end_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `end_time` datetime NOT NULL DEFAULT current_timestamp(),
  `worker_id` varchar(50) NOT NULL,
  PRIMARY KEY (`end_no`),
  KEY `FKswgmemt3mgw1eaa6piu6iscdf` (`worker_id`),
  CONSTRAINT `FKswgmemt3mgw1eaa6piu6iscdf` FOREIGN KEY (`worker_id`) REFERENCES `worker` (`worker_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.worker_attendance_end:~23 rows (대략적) 내보내기
/*!40000 ALTER TABLE `worker_attendance_end` DISABLE KEYS */;
INSERT IGNORE INTO `worker_attendance_end` (`end_no`, `end_time`, `worker_id`) VALUES
	(1, '2023-03-30 16:17:38', 'JongHyeon'),
	(3, '2023-03-03 18:00:21', 'byoung1997'),
	(4, '2023-03-14 18:01:22', 'byoung1997'),
	(5, '2023-03-15 18:02:23', 'byoung1997'),
	(6, '2023-03-16 18:03:24', 'byoung1997'),
	(7, '2023-03-17 18:04:25', 'byoung1997'),
	(10, '2023-03-20 18:07:28', 'byoung1997'),
	(11, '2023-03-21 18:50:29', 'byoung1997'),
	(12, '2023-03-22 18:24:31', 'byoung1997'),
	(13, '2023-03-23 18:34:23', 'byoung1997'),
	(14, '2023-03-24 18:36:26', 'byoung1997'),
	(18, '2023-02-03 18:00:21', 'byoung1997'),
	(19, '2023-02-14 18:01:22', 'byoung1997'),
	(20, '2023-02-15 18:02:23', 'byoung1997'),
	(21, '2023-02-16 18:03:24', 'byoung1997'),
	(22, '2023-02-17 18:04:25', 'byoung1997'),
	(25, '2023-02-20 18:07:28', 'byoung1997'),
	(26, '2023-02-21 18:50:29', 'byoung1997'),
	(27, '2023-02-22 18:24:31', 'byoung1997'),
	(28, '2023-02-23 18:34:23', 'byoung1997'),
	(29, '2023-02-24 18:36:26', 'byoung1997'),
	(33, '2023-04-03 06:25:53', 'byoung1997'),
	(34, '2023-04-03 06:30:05', 'byoung1997'),
	(35, '2023-04-03 15:51:24', 'JongHyeon'),
	(36, '2023-04-03 16:00:45', 'byoung1997');
/*!40000 ALTER TABLE `worker_attendance_end` ENABLE KEYS */;

-- 테이블 d102.worker_attendance_start 구조 내보내기
CREATE TABLE IF NOT EXISTS `worker_attendance_start` (
  `start_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `start_time` datetime NOT NULL DEFAULT current_timestamp(),
  `worker_id` varchar(50) NOT NULL,
  PRIMARY KEY (`start_no`),
  KEY `FKsfc3x9sn0qa9paskb8cen8jh9` (`worker_id`),
  CONSTRAINT `FKsfc3x9sn0qa9paskb8cen8jh9` FOREIGN KEY (`worker_id`) REFERENCES `worker` (`worker_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 d102.worker_attendance_start:~23 rows (대략적) 내보내기
/*!40000 ALTER TABLE `worker_attendance_start` DISABLE KEYS */;
INSERT IGNORE INTO `worker_attendance_start` (`start_no`, `start_time`, `worker_id`) VALUES
	(1, '2023-03-30 16:17:34', 'JongHyeon'),
	(3, '2023-03-03 08:00:21', 'byoung1997'),
	(4, '2023-03-14 08:01:22', 'byoung1997'),
	(5, '2023-03-15 08:02:23', 'byoung1997'),
	(6, '2023-03-16 08:03:24', 'byoung1997'),
	(7, '2023-03-17 08:04:25', 'byoung1997'),
	(10, '2023-03-20 08:07:28', 'byoung1997'),
	(11, '2023-03-21 08:50:29', 'byoung1997'),
	(12, '2023-03-22 08:24:31', 'byoung1997'),
	(13, '2023-03-23 08:34:23', 'byoung1997'),
	(14, '2023-03-24 08:36:26', 'byoung1997'),
	(18, '2023-02-03 08:00:21', 'byoung1997'),
	(19, '2023-02-14 08:01:22', 'byoung1997'),
	(20, '2023-02-15 08:02:23', 'byoung1997'),
	(21, '2023-02-16 08:03:24', 'byoung1997'),
	(22, '2023-02-17 08:04:25', 'byoung1997'),
	(25, '2023-02-20 08:07:28', 'byoung1997'),
	(26, '2023-02-21 08:50:29', 'byoung1997'),
	(27, '2023-02-22 08:24:31', 'byoung1997'),
	(28, '2023-02-23 08:34:23', 'byoung1997'),
	(29, '2023-02-24 08:36:26', 'byoung1997'),
	(33, '2023-04-03 06:25:50', 'byoung1997'),
	(34, '2023-04-03 06:30:02', 'byoung1997'),
	(35, '2023-04-03 15:51:21', 'JongHyeon'),
	(36, '2023-04-03 16:00:42', 'byoung1997');
/*!40000 ALTER TABLE `worker_attendance_start` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
