-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 12 2023 г., 02:19
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `order`
--

-- --------------------------------------------------------

--
-- Структура таблицы `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `title` text NOT NULL,
  `main_image` int(11) NOT NULL,
  `about_image` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `passport_seria` varchar(12) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `client`
--

INSERT INTO `client` (`id`, `fullname`, `address`, `phone`, `passport_seria`, `date`) VALUES
(1, 'Uilyem Uols', 'Boltayeva 41, KHiva, KHorezm, Uzbekistan', '930939200', 'AA2323210', '2023-05-28 12:20:47'),
(2, 'Botirov Shonazar Xusainovich', 'Boltayeva 41, KHiva, KHorezm, Uzbekistan', '930939200', 'AA2323232', '2023-05-28 12:30:07');

-- --------------------------------------------------------

--
-- Структура таблицы `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone1` varchar(20) NOT NULL,
  `phone2` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `deliverer`
--

CREATE TABLE `deliverer` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `passport_seria` varchar(12) NOT NULL,
  `birthday` date NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `deliverer`
--

INSERT INTO `deliverer` (`id`, `fullname`, `phone`, `address`, `passport_seria`, `birthday`, `date`) VALUES
(1, 'Uilyem Uols', '998090809', 'Shotlandiya', 'AA7899887', '1983-05-03', '2023-05-28 16:05:31'),
(2, 'Zarina Farhodova Durdiyevna', '998090809', 'O\'zbekiston', 'AB2344332', '1990-12-12', '2023-05-28 16:05:31'),
(4, 'Botirov Shonazar Xusainovich', '+998930939200', 'Xorezm viloyati Urganch shahri Mustaqqillik', 'AA2323232', '2023-05-27', '2023-06-11 03:10:24');

-- --------------------------------------------------------

--
-- Структура таблицы `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `text` text NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `message`
--

INSERT INTO `message` (`id`, `client_id`, `status`, `text`, `date`) VALUES
(2, 2, 1, 'Siz bizga yukni qayerdan qayerga jo\'natmoqchi ekanligingizni to\'liq manzillari bilan ayting. Yukning og\'irligi va hajmini ham chamalab tariflab bering!', '2023-05-28 14:59:55'),
(3, 2, 0, 'Assalom-u aleykum\nYuk eltuvchi firmammizga hush kelibsiz! Siz bizga yukni qayerdan qayerga jo\'natmoqchi ekanligingizni to\'liq manzillari bilan ayting. Yukning og\'irligi va hajmini ham chamalab tariflab bering!', '2023-05-28 15:00:49'),
(5, 1, 1, 'Salom. Mebel garnitur tahminan 100kg 2,5x2 o\'lchamlik. shuni Urganch sh. Al-Xorazmiy ko\'chasi 9-uy 94-xonadondan Urganch buyum boziriga olib borish kerak', '2023-05-31 14:59:55'),
(6, 1, 0, 'Salom. Kir yuvish moshinasi tahminan 100kg 1.2x1 o\'lchamlik. shuni Urganch sh. Al-Xorazmiy ko\'chasi 9-uy 94-xonadondan Urganch buyum boziriga olib borish kerak', '2023-06-06 15:00:49');

-- --------------------------------------------------------

--
-- Структура таблицы `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `from` varchar(255) NOT NULL,
  `to` varchar(255) NOT NULL,
  `summ` int(11) DEFAULT NULL,
  `goods` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0->qabul qilindi,\r\n1->olib kelish jarayonida,\r\n2->olib borish jarayonida\r\n3->yetkazib berildi\r\n4->arxiv',
  `message_id` int(11) NOT NULL,
  `deliverer_id` int(11) DEFAULT NULL,
  `create_date` datetime NOT NULL DEFAULT current_timestamp(),
  `delivered_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `order`
--

INSERT INTO `order` (`id`, `from`, `to`, `summ`, `goods`, `status`, `message_id`, `deliverer_id`, `create_date`, `delivered_date`) VALUES
(1, 'Urganch shahar Mustaqillik ko\'chasi 4-uy', 'Toshkent shahar Olmaliq tumani Amir Temur ko\'chasi 30-uy', 50000, '0.7kg, 0.04m2', 4, 2, 1, '2023-05-28 22:28:31', '2023-06-11 12:57:01'),
(10, 'Urganch sh. Al-Xorazmiy ko\'chasi 9-uy 94-xonadon', 'Urganch buyum boziri', 75000, 'Mebel garnitur tahminan 100kg 2,5x2 o\'lchamlik', 2, 5, 2, '2023-06-11 12:25:00', NULL);

--
-- Триггеры `order`
--
DELIMITER $$
CREATE TRIGGER `trigger_order_delete` BEFORE DELETE ON `order` FOR EACH ROW BEGIN

UPDATE `message` AS m SET m.status='0' WHERE m.id=OLD.message_id;

END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trigger_order_insert` AFTER INSERT ON `order` FOR EACH ROW BEGIN

    UPDATE `message` AS m SET m.`status`='1' WHERE m.id=NEW.message_id;

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Дублирующая структура для представления `orders`
-- (См. Ниже фактическое представление)
--
CREATE TABLE `orders` (
`id` int(11)
,`from` varchar(255)
,`to` varchar(255)
,`summ` int(11)
,`goods` text
,`status` int(11)
,`message_id` int(11)
,`deliverer_id` int(11)
,`create_date` datetime
,`delivered_date` datetime
,`message_text` text
,`client_id` int(11)
,`client_fullname` varchar(50)
,`client_phone` varchar(20)
,`deliverer_fullname` varchar(50)
,`deliverer_phone` varchar(20)
,`status_name` varchar(29)
);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'admin', '123');

-- --------------------------------------------------------

--
-- Структура для представления `orders`
--
DROP TABLE IF EXISTS `orders`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `orders`  AS SELECT `o`.`id` AS `id`, `o`.`from` AS `from`, `o`.`to` AS `to`, `o`.`summ` AS `summ`, `o`.`goods` AS `goods`, `o`.`status` AS `status`, `o`.`message_id` AS `message_id`, `o`.`deliverer_id` AS `deliverer_id`, `o`.`create_date` AS `create_date`, `o`.`delivered_date` AS `delivered_date`, `m`.`text` AS `message_text`, `c`.`id` AS `client_id`, `c`.`fullname` AS `client_fullname`, `c`.`phone` AS `client_phone`, `d`.`fullname` AS `deliverer_fullname`, `d`.`phone` AS `deliverer_phone`, if(`o`.`status` = 0,'Qabul qilindi',if(`o`.`status` = 1,'Olib ketish jarayonida',if(`o`.`status` = 2,'Olib borish jarayonida','Muafaqiyatli yetkazib berildi'))) AS `status_name` FROM (((`order` `o` join `message` `m`) join `deliverer` `d`) join `client` `c`) WHERE `o`.`message_id` = `m`.`id` AND `o`.`deliverer_id` = `d`.`id` AND `m`.`client_id` = `c`.`id` ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `deliverer`
--
ALTER TABLE `deliverer`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- Индексы таблицы `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deliverer_id` (`deliverer_id`),
  ADD KEY `order_ibfk_1` (`message_id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `deliverer`
--
ALTER TABLE `deliverer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`);

--
-- Ограничения внешнего ключа таблицы `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`message_id`) REFERENCES `message` (`id`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`deliverer_id`) REFERENCES `deliverer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
