-- Query principal para extrair pedidos confirmados com todas as informações relacionadas
SELECT 
  p.id AS pedido_id,
  p.cliente_id,
  p.status,
  p.data_entrega,
  c.nome AS cliente_nome,
  c.email,
  c.cidade,
  ip.produto_id,
  pr.nome AS produto_nome,
  pr.sku,
  ip.quantidade,
  ip.preco_unitario
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id
INNER JOIN itens_pedido ip ON p.id = ip.pedido_id
INNER JOIN produtos pr ON ip.produto_id = pr.id
WHERE p.status = 'confirmado'
ORDER BY p.id;