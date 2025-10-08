window.onload = () => {
    const btn = document.getElementById('btn')

    btn.addEventListener('click', () => {
        const option = {
            title: '木头',
            body: '拍一拍',
            icon: './icon64.png'
        }

        const notification = new window.Notification(option.title, option)
        console.log('notifiction.icon: ', notification.icon);
        notification.onclick = () => {
            console.log('消息被点击了');
        }
    })
}