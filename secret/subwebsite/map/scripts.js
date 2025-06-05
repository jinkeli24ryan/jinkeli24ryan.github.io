document.addEventListener('DOMContentLoaded', function () {
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');
    document.body.appendChild(infoBox);

    function handleMapClick(event) {
        if (event.target.tagName === 'path' && event.target.classList.contains('visited')) {
            const provinceName = event.target.getAttribute('data-name');
            const visitDate = event.target.getAttribute('data-date');
            const photoUrl = event.target.getAttribute('data-photo');
            const datedesciption = event.target.getAttribute('data-disc');

            // 设置提示框的内容，包括省份名称、访问日期和图片
            infoBox.innerHTML = `
                <strong>${provinceName}</strong><br>
                ${datedesciption}<br>
                日期: ${visitDate}<br>
                <img src="${photoUrl}" alt="${provinceName}">
            `;
            
            infoBox.style.display = 'block';

            // 获取鼠标位置并设置提示框位置在右侧
            let infoBoxLeft = event.pageX + 10;
            let infoBoxTop = event.pageY + 10;

            // 确保提示框不会超出视口右边界或下边界
            if (infoBoxLeft + infoBox.offsetWidth > window.innerWidth) {
                infoBoxLeft = event.pageX - infoBox.offsetWidth - 10;
            }
            if (infoBoxTop + infoBox.offsetHeight > window.innerHeight) {
                infoBoxTop = event.pageY - infoBox.offsetHeight - 10;
            }
            // 确保提示框不会超出视口顶部
            if (infoBoxTop < 0) {
                infoBoxTop = 10; // 将其设置在视口顶部下方
            }

            infoBox.style.left = infoBoxLeft + 'px';
            infoBox.style.top = infoBoxTop + 'px';
        }
    }

    // 绑定中国地图的点击事件
    const chinaMap = document.getElementById('china-map');
    if (chinaMap) {
        chinaMap.addEventListener('click', handleMapClick);
    }

    // 绑定泰国地图的点击事件
    const thailandMap = document.getElementById('thailand-map');
    if (thailandMap) {
        thailandMap.addEventListener('click', handleMapClick);
    }

    // 绑定日本地图的点击事件
    const japanMap = document.getElementById('japan-map');
    if (japanMap) {
        japanMap.addEventListener('click', handleMapClick);
    }

    // 当鼠标离开地图时隐藏信息框
    function hideInfoBox() {
        infoBox.style.display = 'none';
    }

    if (chinaMap) {
        chinaMap.addEventListener('mouseout', hideInfoBox);
    }
    if (thailandMap) {
        thailandMap.addEventListener('mouseout', hideInfoBox);
    }
    if (japanMap) {
        japanMap.addEventListener('mouseout', hideInfoBox);
    }

    // 如果鼠标离开信息框，也隐藏信息框
    infoBox.addEventListener('mouseout', hideInfoBox);
});
