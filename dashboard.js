async function fetchDashboardData() {
    const response = await fetch('getDashboardData.php');
    const data = await response.json();

    // แสดงข้อมูลบน Dashboard
    const dashboardId = document.getElementById('dashboard_id');
    const userId = document.getElementById('user_id');
    const lastLogin = document.getElementById('lastlogin');
    const notifications = document.getElementById('notifications');
    const recentActivity = document.getElementById('recentactivity');
    const widgets = document.getElementById('widgets');

    // แสดงค่าใน HTML
    dashboardId.textContent = data[0].dashboard_id || '-';
    userId.textContent = data[0].user_id || '-';
    lastLogin.textContent = data[0].lastlogin || '-';

    // แสดง Notifications
    data.forEach((item) => {
        const notificationItem = document.createElement('li');
        notificationItem.textContent = item.notifications || '-';
        notifications.appendChild(notificationItem);
    });

    // แสดง Recent Activity
    data.forEach((item) => {
        const activityItem = document.createElement('li');
        activityItem.textContent = item.recentactivity || '-';
        recentActivity.appendChild(activityItem);
    });

    // แสดง Widgets
    data.forEach((item) => {
        const widgetItem = document.createElement('div');
        widgetItem.textContent = item.widgets || '-';
        widgets.appendChild(widgetItem);
    });
}

fetchDashboardData();
