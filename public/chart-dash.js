
//plays
const ctx = document.getElementById("myPlays").getContext("2d");
const curPlayBarData = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
  datasets: [{
    data: [0,5,0,0,0,7,15,25,5,2,0,0,0,4,15,2,0,0,0,1,1,0,0,0,20,22,10,11,4,11],
    backgroundColor: 'rgba(16, 185, 129, 0.7)'
  }]
};
const curPlays = new Chart(ctx, {
  type: 'bar',
  data: curPlayBarData,
  options: {
    legend: {
      display: false,
      position: 'bottom',
    },
    title: {
      display: true,
      fontColor: 'rgba(16, 185, 129, 0.9)',
      fontSize: 12,
      text: 'Current Plays'
    }
  }
});

// last 3 months
const ctx2 = document.getElementById('myLastMonths').getContext('2d');
const lastMonthsData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{
    data: [202, 300, 110],
    backgroundColor: ['rgba(16, 185, 129, 0.7)', 'rgba(236, 72, 153, 0.7)', 'rgba(139, 90, 246, 0.7)']
  }]
};
const lastMonths = new Chart(ctx2, {
  type: 'bar',
  data: lastMonthsData,
  options: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: true,
        fontColor: 'rgba(236, 72, 153, 0.9)',
        fontSize: 12,
        text: 'Last 3 Months'
      }
  }
});

// top users
const ctx3 = document.getElementById('myTopUsers').getContext('2d');
const topUsersData = {
  labels: ['Jeromy', 'Mike', 'Sally'],
  datasets: [{
    data: [24, 10, 4],
    backgroundColor: ['rgba(59, 130, 246, 0.9)', 'rgba(245, 158, 11, 0.9)','rgba(139, 90, 246, 0.9)']
  }]
};
const topUsers = new Chart(ctx3, {
  type: 'doughnut',
  data: topUsersData,
  options: {
      legend: {
        display: true,
        position: 'bottom'
      },
      title: {
        display: true,
        fontColor: 'rgba(59, 130, 246, 0.9)',
        fontSize: 12,
        text: 'Top Users'
      }
  }
});

// top users
const ctx4 = document.getElementById('mySongPlays').getContext('2d');
const SongPlaysData = {
  labels: ['Autumn Leaves', 'The Swell', 'Calcium', 'Seastar', 'All This Between the Temples'],
  datasets: [{
    data: [17, 40, 22, 18, 10],
    backgroundColor: ['rgba(59, 130, 246, 0.9)', 'rgba(245, 158, 11, 0.9)','rgba(139, 90, 246, 0.9)','rgba(16, 185, 129, 0.9)','rgba(236, 72, 153, 0.9)']
  }],
  fill: false
};
const SongPlays = new Chart(ctx4, {
  type: 'line',
  data: SongPlaysData,
  options: {
      legend: {
        display: false,
        position: 'bottom'
      },
      title: {
        display: true,
        fontColor: '#6B7280',
        fontSize: 12,
        text: 'Top Songs'
      },
      elements: {
        line: {
          fill: false,
          borderColor: 'rgba(16, 185, 129, 0.5)'
        }
      }
  }
});
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.elements.line.fill = false;