
const sampleOrders = [
  {
    id: 1,
    items: [
      { 
        burger: { 
          id: 1,
          name: 'Hambúrguer Clássico',
          price: 25.90,
          image: '/src/assets/burger/cheeseburguer-classico-na-placa-de-madeira.jpg'
        }, 
        quantity: 2, 
        price: 25.90 
      }
    ],
    total: 51.80,
    customerName: 'João Silva',
    customerEmail: 'joao.silva@email.com',
    customerPhone: '(11) 99999-9999',
    deliveryAddress: 'Rua das Flores, 123 - Centro',
    paymentMethod: 'Cartão de Crédito',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 horas atrás
    status: 'preparando',
    statusHistory: [
      { 
        status: 'confirmado', 
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido confirmado e enviado para a cozinha' 
      },
      { 
        status: 'preparando', 
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido em preparo na cozinha' 
      }
    ],
    estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000).toISOString(), // 30 min
    notes: 'Sem cebola'
  },
  {
    id: 2,
    items: [
      { 
        burger: { 
          id: 4,
          name: 'Cheeseburger',
          price: 28.90,
          image: '/src/assets/burger/fatias-de-carne-no-pao-com-queijo-derretido.jpg'
        }, 
        quantity: 1, 
        price: 28.90 
      }
    ],
    total: 28.90,
    customerName: 'Maria Santos',
    customerEmail: 'maria.santos@email.com',
    customerPhone: '(11) 88888-8888',
    deliveryAddress: 'Av. Principal, 456 - Jardins',
    paymentMethod: 'PIX',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hora atrás
    status: 'a_caminho',
    statusHistory: [
      { 
        status: 'confirmado', 
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido confirmado e enviado para a cozinha' 
      },
      { 
        status: 'preparando', 
        timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(), 
        message: 'Pedido em preparo na cozinha' 
      },
      { 
        status: 'a_caminho', 
        timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), 
        message: 'Pedido saiu para entrega' 
      }
    ],
    estimatedDelivery: new Date(Date.now() + 15 * 60 * 1000).toISOString(), // 15 min
    notes: 'Entregar na portaria'
  },
  {
    id: 3,
    items: [
      { 
        burger: { 
          id: 6,
          name: 'Hambúrguer Vegano',
          price: 32.90,
          image: '/src/assets/burger/hamburgueres-veganos-com-feijao-e-legumes.jpg'
        }, 
        quantity: 1, 
        price: 32.90 
      }
    ],
    total: 32.90,
    customerName: 'Carlos Oliveira',
    customerEmail: 'carlos.oliveira@email.com',
    customerPhone: '(11) 77777-7777',
    deliveryAddress: 'Rua da Paz, 789 - Vila Nova',
    paymentMethod: 'Dinheiro',
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 horas atrás
    status: 'entregue',
    statusHistory: [
      { 
        status: 'confirmado', 
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido confirmado e enviado para a cozinha' 
      },
      { 
        status: 'preparando', 
        timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido em preparo na cozinha' 
      },
      { 
        status: 'a_caminho', 
        timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido saiu para entrega' 
      },
      { 
        status: 'entregue', 
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido entregue com sucesso' 
      }
    ],
    estimatedDelivery: null,
    deliveredAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    notes: 'Troco para R$ 50,00'
  },
  {
    id: 4,
    items: [
      { 
        burger: { 
          id: 2,
          name: 'Hambúrguer com Bacon',
          price: 35.90,
          image: '/src/assets/burger/close-vertical-de-um-hamburguer-saboroso-com-bacon-em-uma-parede-preta.jpg'
        }, 
        quantity: 1, 
        price: 35.90 
      }
    ],
    total: 35.90,
    customerName: 'Ana Costa',
    customerEmail: 'ana.costa@email.com',
    customerPhone: '(11) 66666-6666',
    deliveryAddress: 'Rua do Sol, 321 - Centro',
    paymentMethod: 'Cartão de Débito',
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 horas atrás
    status: 'cancelado',
    statusHistory: [
      { 
        status: 'confirmado', 
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido confirmado e enviado para a cozinha' 
      },
      { 
        status: 'cancelado', 
        timestamp: new Date(Date.now() - 3.5 * 60 * 60 * 1000).toISOString(), 
        message: 'Pedido cancelado pelo cliente' 
      }
    ],
    estimatedDelivery: null,
    cancelledAt: new Date(Date.now() - 3.5 * 60 * 60 * 1000).toISOString(),
    cancellationReason: 'Cliente solicitou cancelamento',
    notes: 'Cliente não estava em casa'
  }
];

// ==================== FUNÇÕES DE GERENCIAMENTO ====================

// Função para obter todos os pedidos
export const getAllOrders = () => {
  const savedOrders = localStorage.getItem('orders');
  if (savedOrders) {
    return JSON.parse(savedOrders);
  }
  
  // Se não há pedidos salvos, inicializar com dados de exemplo
  localStorage.setItem('orders', JSON.stringify(sampleOrders));
  return sampleOrders;
};

// Função para obter pedidos por status
export const getOrdersByStatus = (status) => {
  const orders = getAllOrders();
  if (status === 'all') {
    return orders;
  }
  return orders.filter(order => order.status === status);
};

// Função para obter pedidos por ID
export const getOrderById = (id) => {
  const orders = getAllOrders();
  return orders.find(order => order.id === id);
};

// Função para criar novo pedido
export const createOrder = (orderData) => {
  const orders = getAllOrders();
  const newOrder = {
    id: Date.now(),
    ...orderData,
    createdAt: new Date().toISOString(),
    status: 'confirmado',
    statusHistory: [
      {
        status: 'confirmado',
        timestamp: new Date().toISOString(),
        message: 'Pedido confirmado e enviado para a cozinha'
      }
    ],
    estimatedDelivery: new Date(Date.now() + 45 * 60 * 1000).toISOString() // 45 min
  };
  
  orders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(orders));
  return newOrder;
};

// Função para atualizar status do pedido
export const updateOrderStatus = (orderId, newStatus, message) => {
  const orders = getAllOrders();
  const order = orders.find(o => o.id === orderId);
  
  if (order) {
    order.status = newStatus;
    order.statusHistory.push({
      status: newStatus,
      timestamp: new Date().toISOString(),
      message: message
    });
    
    // Adicionar timestamps específicos baseados no status
    if (newStatus === 'entregue') {
      order.deliveredAt = new Date().toISOString();
      order.estimatedDelivery = null;
    } else if (newStatus === 'cancelado') {
      order.cancelledAt = new Date().toISOString();
      order.estimatedDelivery = null;
    }
    
    localStorage.setItem('orders', JSON.stringify(orders));
    return true;
  }
  return false;
};

// Função para cancelar pedido
export const cancelOrder = (orderId, reason = 'Cancelado pelo cliente') => {
  return updateOrderStatus(orderId, 'cancelado', reason);
};

// Função para buscar pedidos
export const searchOrders = (searchTerm) => {
  const orders = getAllOrders();
  if (!searchTerm) return orders;
  
  const term = searchTerm.toLowerCase();
  return orders.filter(order => 
    order.customerName.toLowerCase().includes(term) ||
    order.customerEmail.toLowerCase().includes(term) ||
    order.deliveryAddress.toLowerCase().includes(term) ||
    order.paymentMethod.toLowerCase().includes(term) ||
    order.id.toString().includes(term) ||
    order.items.some(item => 
      item.burger.name.toLowerCase().includes(term)
    )
  );
};

// Função para obter estatísticas dos pedidos
export const getOrderStats = () => {
  const orders = getAllOrders();
  const total = orders.length;
  const emAndamento = orders.filter(o => ['preparando', 'a_caminho'].includes(o.status)).length;
  const concluidos = orders.filter(o => o.status === 'entregue').length;
  const cancelados = orders.filter(o => o.status === 'cancelado').length;
  const confirmados = orders.filter(o => o.status === 'confirmado').length;
  
  return {
    total,
    emAndamento,
    concluidos,
    cancelados,
    confirmados,
    taxaConclusao: total > 0 ? ((concluidos / total) * 100).toFixed(1) : 0
  };
};

// Função para obter pedidos recentes
export const getRecentOrders = (limit = 5) => {
  const orders = getAllOrders();
  return orders
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
};

// Função para obter pedidos por período
export const getOrdersByPeriod = (startDate, endDate) => {
  const orders = getAllOrders();
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return orders.filter(order => {
    const orderDate = new Date(order.createdAt);
    return orderDate >= start && orderDate <= end;
  });
};

// Função para limpar dados de exemplo (para desenvolvimento)
export const clearSampleData = () => {
  localStorage.removeItem('orders');
};

// Função para resetar para dados de exemplo
export const resetToSampleData = () => {
  localStorage.setItem('orders', JSON.stringify(sampleOrders));
  return sampleOrders;
};

// Exportar dados de exemplo para uso em outros arquivos
export { sampleOrders };
