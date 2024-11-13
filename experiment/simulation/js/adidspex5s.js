/*
This scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
LinkedIn: https://www.linkedin.com/in/akraonandula/
Updated on: 06-05-2022

*/


function calculateDFT(signal, dftPoints) {
  const N = signal.length;
  const dft = [];
  
  for (let k = 0; k < dftPoints; k++) {
    let real = 0;
    let imag = 0;
    
    for (let n = 0; n < N; n++) {
      const angle = (2 * Math.PI * k * n) / N;
      const value = signal[n];
      real += value * Math.cos(angle);
      imag -= value * Math.sin(angle);
    }
    
    const magnitude = Math.sqrt(real * real + imag * imag);
    dft.push(magnitude);
  }
  
  return dft;
}

function generateUnitRampSignal(gain, length) {
  const signal = [];
  
  for (let i = 0; i < length; i++) {
    signal.push(i * gain);
  }
  
  return signal;
}

function plotSignals() {
  const numSamples = parseInt(document.getElementById('num-samples').value);
  const gain = parseInt(document.getElementById('gain').value);
  const dftPoints = parseInt(document.getElementById('dft-points').value);
  
  const inputSignal = generateUnitRampSignal(gain, numSamples);
  const dft = calculateDFT(inputSignal, dftPoints);
  
  const chartsContainer = document.getElementById('charts-container');
  chartsContainer.innerHTML = '';
  
  const inputChartContainer = document.createElement('div');
  inputChartContainer.className = 'chart-container';
  
  const inputChartCanvas = document.createElement('canvas');
  inputChartCanvas.id = 'input-chart';
  inputChartContainer.appendChild(inputChartCanvas);
  
  chartsContainer.appendChild(inputChartContainer);
  
  const dftChartContainer = document.createElement('div');
  dftChartContainer.className = 'chart-container';
  
  const dftChartCanvas = document.createElement('canvas');
  dftChartCanvas.id = 'dft-chart';
  dftChartContainer.appendChild(dftChartCanvas);
  
  chartsContainer.appendChild(dftChartContainer);
  
  const inputCtx = document.getElementById('input-chart').getContext('2d');
  new Chart(inputCtx, {
    type: 'bar',
    data: {
      labels: Array.from(Array(inputSignal.length).keys()),
      datasets: [
        {
          label: 'Unit Ramp Input Signal X1(n)',
          data: inputSignal,
          backgroundColor: 'rgb(75, 192, 192)'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'No. of Samples'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Voltage'
          }
        }
      }
    }
  });
  
  const dftCtx = document.getElementById('dft-chart').getContext('2d');
  new Chart(dftCtx, {
    type: 'bar',
    data: {
      labels: Array.from(Array(dftPoints).keys()),
      datasets: [
        {
          label: 'Magnitude Spectrum of DFT of unit ramp signal',
          data: dft,
          backgroundColor: 'rgb(192, 75, 192)'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'No. of Samples'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Voltage'
          }
        }
      }
    }
  });
}
