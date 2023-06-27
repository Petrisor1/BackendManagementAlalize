-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: management_teste
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pacienti`
--

DROP TABLE IF EXISTS `pacienti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacienti` (
  `pacient_id` int NOT NULL AUTO_INCREMENT,
  `nume` varchar(150) NOT NULL,
  `prenume` varchar(150) NOT NULL,
  `data_nastere` date NOT NULL,
  `gen` varchar(50) NOT NULL,
  `contact_info` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `parola` varchar(250) DEFAULT NULL,
  `alte_informatii` text,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `CNP` varchar(150) DEFAULT NULL,
  `adresa` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`pacient_id`),
  UNIQUE KEY `CNP_UNIQUE` (`CNP`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacienti`
--

LOCK TABLES `pacienti` WRITE;
/*!40000 ALTER TABLE `pacienti` DISABLE KEYS */;
INSERT INTO `pacienti` VALUES (1,'Cirdei','Vasile-Petrisor','2022-01-06','masculin','0746242358','petrisorc65@gmail.com','$2a$10$cMGE6HZYdTdfuIz4lCw6zuO4h48FasFM3dTebHISHRWLqGtb7lL/6','nimic','2023-05-28','2023-05-28','5000906330530',NULL),(3,'Popescu','Andrei-Iulian','1989-01-01','masculin','petrisorc65@gmail.com','petrisorc65@gmail.com',NULL,NULL,'2023-06-05','2023-06-05','50679356784',NULL),(4,'Mandici','Claudia','1989-01-01','feminin','man@gmail.com','man@gmail.com',NULL,NULL,'2023-06-05','2023-06-05','1234567898',NULL),(5,'Irimescu','Ion','1989-01-01','masculin','ionel@gmail.com','ionel@gmail.com',NULL,NULL,'2023-06-05','2023-06-05','3456789123',NULL),(6,'Vicovan','Marius','1989-01-01','masculin','vicovan@gmail.com','vicovan@gmail.com',NULL,NULL,'2023-06-05','2023-06-05','1234567432',NULL),(7,'Avram','Iancu','1900-03-07','masculin','iancu@gmail.com','iancu@gmail.com',NULL,NULL,'2023-06-05','2023-06-05','9875723452',NULL),(8,'Duta','Laurentiu','1900-03-07','masculin','laur@gmail.com','laur@gmail.com',NULL,NULL,'2023-06-05','2023-06-05','3462312345',NULL),(9,'Duta','Laurentiu','1900-03-07','masculin','laur@gmail.com','laur@gmail.com',NULL,NULL,'2023-06-05','2023-06-05','1932167538',NULL),(10,'Sulschi','Laurentiu','1900-03-07','masculin','sulschi@gmail.com','sulschi@gmail.com','$2a$05$BO2jWb922p1gPW.db3HIzevzO3Y5DXfxtIEtlYErYgwT..NqMfUo.',NULL,'2023-06-05','2023-06-05','1932416538',NULL),(11,'Octavian','Dumitru','1900-03-07','masculin','dumi@gmail.com','dumi@gmail.com','$2a$10$yzjhC9u0wizRPtmkWAFnS.W2XGVie5K8JMD.rYXk9diKE1YsmbrTS',NULL,'2023-06-05','2023-06-05','1532416538',NULL),(12,'Paranici','Iulian','2001-12-12','masculin','paranici@gmail.com','paranici@gmail.com','$2a$10$mdgxI2FkBzTIjVZgOQzINeS2tPwlRkU6ReydFpPXmSvM0t4BeIfgq',NULL,'2023-06-05','2023-06-05','6785438651',NULL),(13,'Damin','Draghia','2000-05-12','masculin','drag@gmail.com','drag@gmail.com','$2a$10$FUiOlC.DIxcbLUTdIrpykOXYyJO6iV3puizS4dSerAUMnBsSBlrdy',NULL,'2023-06-05','2023-06-05','8933667723',NULL),(14,'Damin','Draghia','2000-05-12','masculin','drag@gmail.com','drag@gmail.com','$2a$10$2HedOx22m1RbP3qg23sSAOb4Z2z6UvdS/51H9S50zM.8ltXVxtU1.',NULL,'2023-06-05','2023-06-05','8933687723',NULL),(15,'Damin','Draghia','2000-05-12','masculin','drag@gmail.com','drag@gmail.com','$2a$10$dowdtinKh4/KN3QE8m4lj.OKZlxzYA7oiITDmoEE7l/kGzLNPxHsG',NULL,'2023-06-05','2023-06-05','8933687791',NULL),(16,'Patraucean','Andrei','2001-09-08','masculin','pat@gmail.com','pat@gmail.com','$2a$10$nG1Oi8B7LaahzRSbsMee6O8H7VliT3C8AltYADafgkaMBpFeaY/uG',NULL,'2023-06-05','2023-06-05','4321123456',NULL),(17,'Palevici','Ioana','2001-08-25','feminin','ionela@gmail.com','ionela@gmail.com','$2a$10$fDzH6WTu1aofsLOHCjFcgOEe6.a2Usro2paCbHwl1Tjdgmj7DNRMO',NULL,'2023-06-05','2023-06-05','9988345123',NULL),(18,'Chira','Andrei','1998-05-10','masculin','chira@gmail.com','chira@gmail.com','$2a$10$NUiw0rFyX3t5kFXLWh1gK.Uxt7vzwBwZc2/BneAjc8ktBo4MV0p5y',NULL,'2023-06-10','2023-06-10','5000906334567',NULL),(19,'Popescu','Andrei','1997-01-12','masculin','popescu@gmail.com','popescu@gmail.com','$2a$10$SfiqoontN9CihHmLAbIt4OBCJFwEi9G6zkZhkl1EKBpNG6vlKn9DS',NULL,'2023-06-12','2023-06-12','0986527636452',NULL);
/*!40000 ALTER TABLE `pacienti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-27 16:28:17
