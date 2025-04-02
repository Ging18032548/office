async function loadData() {
    document.getElementById('load-btn').style.display = 'none';
    document.getElementById('tables-container').classList.remove('hidden');

    try {
        const response = await axios.get(BASE_URL);
        const data = response.data;

        populateTable('activities-table', data.activities, ['activity_id', 'user_id', 'action', 'timestamp']);
        populateTable('borrow-records-table', data.borrowRecords, ['borrow_id', 'user_id', 'equipment_id', 'borrowed_date', 'returned_date', 'status']);
        populateTable('dashboards-table', data.dashboards, ['dashboard_id', 'user_id', 'last_login', 'notifications', 'recent_activity', 'widgets']);
        populateTable('equipment-table', data.equipment, ['equipment_id', 'equipment_name', 'category', 'brand', 'quantity', 'purchase_date', 'location', 'condition', 'description']);
        populateTable('maintenance-table', data.maintenance, ['maintenance_id', 'equipment_id', 'date', 'details']);
        populateTable('reports-table', data.reports, ['report_id', 'user_id', 'report_name', 'report_type', 'create_date', 'modified_date', 'data']);

    } catch (error) {
        console.error('Error loading data:', error);
    }
}
