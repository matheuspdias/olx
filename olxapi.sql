-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Nov-2020 às 17:21
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `olxapi`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `announcements`
--

CREATE TABLE `announcements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_user` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` int(11) NOT NULL DEFAULT 0,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zipcode` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `announcements`
--

INSERT INTO `announcements` (`id`, `id_user`, `title`, `category`, `description`, `price`, `zipcode`, `images`, `created_at`) VALUES
(9, 1, 'Flat perto do Metrô Moema em Moema ? Adagio São Paulo Moema', 1, 'Nesse condomínio estão inclusas as despesas com camareira, vaga de garagem, manobrista, mensageiro, recepção 24 hs, TV à cabo, área de lazer com piscina, sauna, sala de ginástica (serviços podem variar de acordo com o edifício). Esse flat não ?aceita pet?. A disponibilidade da unidade, Valores e comercialização sujeitos a alteração, modificação ou extinção sem prévio aviso. Os Valores, a área útil e as condições são dados fornecidos exclusivamente pelos proprietários, portanto suscetíveis a ajustes. Fotos meramente ilustrativas. Para maiores informações liguem na Imobiliária Flat e Flats ? (011)', '3.200', '08412030', 'd48742828646f17cab98a683b539913d.jpg', '2020-11-02 02:00:29'),
(10, 1, 'Bmw 1200 gs', 2, 'Moto zera sem nenhum detalhe', '73.500', '08412030', '74f90fad42b057b2c72236d620b9783c.jpg', '2020-11-02 02:01:47'),
(11, 1, 'Jetta', 2, 'Jetta Confortline 250 TSi 1.4 Flex 2018\n\nVenha trocar de carro na Seminovos Movida, você vai garantir um BOM NEGÓCIO*', '90.000', '08412030', '8a17d4e4b248967233637d96c911510e.jpg', '2020-11-02 02:03:33'),
(12, 1, 'Simular financiamento Condomínio Quinta do Golfe I - Zona Sul de São José Rio Preto/SP', 1, 'varanda gourmet climatizada para 02 ambientes com 37,00 m²:\nChurrasqueira com coifa, espaço para cooktop ou chapa de\nlanche, balcão refrigerado;\ncozinha com ampla abertura de porta para área gourmet;', '1.950.000', '08412030', 'a505cd32d5a1f9865fade8effc2182af.jpg', '2020-11-02 02:10:10'),
(13, 1, 'Mac Book pro ultima geração', 4, 'Procesador i7, 16gb RAM 500gb SSD', '15.000', '08412030', '6c5b5db5f21fd7bad33483760a8341d2.jpg', '2020-11-02 02:12:05'),
(14, 1, 'Cadeira cabeleleiro', 7, 'nova usada apenas 3 vezes', '250.00', '08412030', '25ffc9243a5c949cfc0186d30514ecf3.jpg', '2020-11-02 02:26:27');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `covercategory` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `categories`
--

INSERT INTO `categories` (`id`, `name`, `covercategory`) VALUES
(1, 'Imóveis', 'imoveis.png'),
(2, 'Autos e peças', 'autoepecas.png'),
(3, 'Para a sua casa', 'paracasa.png'),
(4, 'Eletrônicos e celulares', 'eletronicos.png'),
(5, 'Músicas e hobbies', 'musicas.png'),
(6, 'Esporte e lazer', 'esporteelazer.png'),
(7, 'Moda e beleza', 'moda.png'),
(8, 'Animais', 'animais.png'),
(9, 'Artigos infantis', 'infantis.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `city` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `city`, `password`, `token`) VALUES
(1, 'Matheus', 'matheus@gmail.com', '11976048255', 'São Paulo', '$2y$10$EaMq8ug7Jd6qLtO270UIDulFZtIn45W3Rwkk5FwPsYCm1hZb0aBVS', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
