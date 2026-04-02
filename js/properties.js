const properties = [
  { id: 1, address: "Grenada, MS", type: "Residential", beds: 3, baths: 2, rent: 850, status: "occupied", icon: "🏠", desc: "3BR/2BA home in established neighborhood" },
  { id: 2, address: "Grenada, MS", type: "Residential", beds: 2, baths: 1, rent: 700, status: "occupied", icon: "🏡", desc: "2BR/1BA well-maintained rental home" },
  { id: 3, address: "Grenada, MS", type: "Residential", beds: 3, baths: 1, rent: 800, status: "occupied", icon: "🏠", desc: "3BR/1BA spacious rental near Highway 8" },
  { id: 4, address: "Grenada, MS", type: "Residential", beds: 2, baths: 2, rent: 875, status: "occupied", icon: "🏡", desc: "2BR/2BA updated rental with modern finishes" },
  { id: 5, address: "Grenada, MS", type: "Residential", beds: 3, baths: 2, rent: 800, status: "occupied", icon: "🏠", desc: "3BR/2BA family home, fully occupied" },
  { id: 6, address: "Grenada, MS", type: "Sober Living Conversion", beds: 6, baths: 3, rent: 7000, status: "development", icon: "🔨", desc: "High-impact conversion targeting recovery housing market. Projected $7,000+/mo." },
  { id: 7, address: "Grenada, MS", type: "Residential", beds: 3, baths: 1, rent: 750, status: "available", icon: "🏡", desc: "3BR/1BA value-add opportunity in pipeline" },
  { id: 8, address: "Grenada, MS", type: "Residential", beds: 2, baths: 1, rent: 650, status: "available", icon: "🏠", desc: "2BR/1BA renovation pipeline property" },
  { id: 9, address: "Grenada, MS", type: "Residential", beds: 3, baths: 2, rent: 900, status: "available", icon: "🏡", desc: "3BR/2BA value-add property in active development" },
];

const statusConfig = {
  occupied:    { label: 'Fully Occupied',  cls: 'badge-green' },
  available:   { label: 'Available',       cls: 'badge-blue' },
  development: { label: 'In Development',  cls: 'badge-gold' }
};

function renderProperties(filter = 'all') {
  const grid = document.getElementById('propGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? properties : properties.filter(p => p.status === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="prop-card" data-status="${p.status}">
      <div class="prop-image">${p.icon}</div>
      <div class="prop-body">
        <div class="prop-type">${p.type}</div>
        <h3>${p.address}</h3>
        <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:12px;">${p.desc}</p>
        <div class="prop-details">
          <span>🛏 ${p.beds} bed</span>
          <span>🚿 ${p.baths} bath</span>
        </div>
        <div class="prop-rent">${p.status === 'development' ? 'Est. ' : ''}$${p.rent.toLocaleString()}<span style="font-size:.85rem;font-weight:400;color:var(--text-muted)">/mo</span></div>
        <div class="prop-tags">
          <span class="badge ${statusConfig[p.status].cls}">${statusConfig[p.status].label}</span>
        </div>
      </div>
    </div>
  `).join('');
}

renderProperties();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProperties(btn.dataset.filter);
  });
});
