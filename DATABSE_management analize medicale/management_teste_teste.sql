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
-- Table structure for table `teste`
--

DROP TABLE IF EXISTS `teste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teste` (
  `test_id` int NOT NULL AUTO_INCREMENT,
  `tip_id` int NOT NULL,
  `nume_test` varchar(255) NOT NULL,
  `descriere_test` varchar(255) DEFAULT NULL,
  `valoare_minima` float DEFAULT NULL,
  `valoare_maxima` float DEFAULT NULL,
  `unitate` varchar(255) DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  PRIMARY KEY (`test_id`),
  KEY `tip_id` (`tip_id`),
  CONSTRAINT `teste_ibfk_1` FOREIGN KEY (`tip_id`) REFERENCES `tipuri_teste` (`tip_id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teste`
--

LOCK TABLES `teste` WRITE;
/*!40000 ALTER TABLE `teste` DISABLE KEYS */;
INSERT INTO `teste` VALUES (1,1,'NUMAR DE ERITROCITE (RBC)','',3.92,5.08,'mil/μL','2023-06-01','2023-06-01'),(2,1,'HEMOGLOBINA (HGB)','',11.9,14.6,'g/dL','2023-06-01','2023-06-01'),(3,1,'HEMATOCRIT (HCT)','',36.6,44,'%','2023-06-01','2023-06-01'),(4,1,'VOLUMUL MEDIU ERITROCITAR (MCV)','',82.9,98,'fL','2023-06-01','2023-06-01'),(5,1,'HEMOGLOBINA ERITROCITARA MEDIE (MCH)','',27,32.3,'pg','2023-06-01','2023-06-01'),(6,1,'CONCENTRATIA MEDIE A HEMOGLOBINEI ERITROCITARE (MCHC)','',31.8,34.7,'g/dL','2023-06-01','2023-06-01'),(7,1,'LARGIMEA DISTRIBUTIEI ERITROCITARE / COEFICIENT VARIATIE (RDW)','',11.6,14.8,'%','2023-06-01','2023-06-01'),(8,1,'NUMAR DE LEUCOCITE (WBC)','',4.49,12.68,'mii/μL','2023-06-01','2023-06-01'),(9,1,'PROCENTUL DE NEUTROFILE (NEUT%)','',42.9,74.3,'%','2023-06-01','2023-06-01'),(10,1,'PROCENTUL DE EOZINOFILE (EOS%)','',0.2,5.3,'%','2023-06-01','2023-06-01'),(11,1,'PROCENTUL DE BAZOFILE (BAS%)','',0.1,1,'%','2023-06-01','2023-06-01'),(12,1,'PROCENTUL DE LIMFOCITE (LYM%)','',18.3,45.7,'%','2023-06-01','2023-06-01'),(13,1,'PROCENTUL DE MONOCITE (MON%)','',4.2,11.8,'%','2023-06-01','2023-06-01'),(14,1,'NUMAR DE NEUTROFILE (NEUT)','',2.1,8.89,'mii/μL','2023-06-01','2023-06-01'),(15,1,'NUMAR DE EOZINOFILE (EOS)','',0.01,0.4,'mii/μL','2023-06-01','2023-06-01'),(16,1,'NUMAR DE BAZOFILE (BAS)','',0.01,0.07,'mii/μL','2023-06-01','2023-06-01'),(17,1,'NUMAR DE LIMFOCITE (LYM)','',1.26,3.35,'mii/μL','2023-06-01','2023-06-01'),(18,1,'NUMAR DE MONOCITE (MON)','',0.25,0.84,'mii/μL','2023-06-01','2023-06-01'),(19,1,'NUMAR DE TROMBOCITE (PLT)','',150,450,'mii/μL','2023-06-01','2023-06-01'),(20,1,'VOLUMUL MEDIU PLACHETAR (MPV)','',7.4,13,'fL','2023-06-01','2023-06-01'),(21,1,'DISTRIBUTIA PLACHETELOR(TROMBOCITELOR) (PDW)','',8,16.5,'fL','2023-06-01','2023-06-01'),(22,3,'VSH','sange , metoda fotometrica',8,20,'mm/h','2023-06-01','2023-06-01'),(23,3,'FIBRINOGEN','plasma, metoda coagulometrica ',170,350,'mg/dh','2023-06-01','2023-06-01'),(24,2,'ACID URIC SERIC','ser, metoda spectrofotometrica',2.4,5.7,'mg/dL','2023-06-01','2023-06-01'),(25,2,'ALANINAMINOTRANSFERAZA (ALT/GPT/TGP)','ser, metoda spectrofotometrica',5,31,'U/L','2023-06-01','2023-06-01'),(26,2,'ASPARTATAMINOTRANSFERAZA (GOT/AST/TGO)','ser, metoda spectrofotometrica',5,32,'U/L','2023-06-01','2023-06-01'),(27,2,'CALCIU SERIC','ser, metoda spectrofotometrica',8.4,10.2,'mg/dL','2023-06-01','2023-06-01'),(28,2,'COLESTEROL TOTAL','ser, metoda spectrofotometrica',120,200,'mg/dL','2023-06-01','2023-06-01'),(29,2,'COLESTEROL HDL','ser, metoda spectrofotometrica',50,9999,'mg/dL','2023-06-01','2023-06-01'),(30,2,'LDL COLESTEROL','ser, metoda spectrofotometrica',60,100,'mg/dL','2023-06-01','2023-06-01'),(31,2,'RATA ESTIMATA A FILTRARII GLOMEMURATE (EGFR)','ser, metoda spectrofotometrica',60,90,'ml/min/1.73mp','2023-06-01','2023-06-01'),(32,2,'GLUCOZA SERICA (GLICEMIE)','ser, metoda spectrofotometrica',60,99,'mg/dL','2023-06-01','2023-06-01'),(33,2,'TRIGLICERIDE','ser, metoda spectrofotometrica',35,150,'mg/dL','2023-06-01','2023-06-01'),(34,4,'PH URINAR','',5,7,'','2023-06-01','2023-06-01'),(35,4,'DENSITATE URINARA','',1010,1030,'','2023-06-01','2023-06-01'),(36,4,'LEUCOCIT ESTERAZA','Normal/Absent/Negativ',0,0,'WBCs/uL','2023-06-01','2023-06-01'),(37,4,'BILIRUBINA','Normal/Absent/Negativ',0,0,'0.5 mg/dl, 1.0','2023-06-01','2023-06-01'),(38,4,'UROBILINOGEN','Normal, 0.2 mg/dL, 1',0,0,'mg/dL, 2 mg/dL','2023-06-01','2023-06-01'),(39,4,'GLUCOZA','Normal',0,0,'','2023-06-01','2023-06-01'),(40,4,'PROTEINE','Normal=1,Absent=0,Negativ=-1',0,0,'','2023-06-01','2023-06-01'),(41,4,'CORPI CETONICI','Normal=1,Absent=0,Negativ=-1',0,0,'','2023-06-01','2023-06-01'),(42,4,'NITRITI','Normal=1,Absent=0,Negativ=-1',0,0,'','2023-06-01','2023-06-01'),(43,5,'TSH (HORMON DE STIMULARE TIROIDIANA)','Normal=1,Absent=0,Negativ=-1',0.27,4.2,'μUI/mL','2023-06-01','2023-06-01');
/*!40000 ALTER TABLE `teste` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-27 16:28:18
