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
      const angle = (2 * Math.PI * (k - Math.floor(dftPoints / 2)) * (n - Math.floor(N / 2))) / N;
      const value = signal[n];
      real += value * Math.cos(angle);
      imag -= value * Math.sin(angle);
    }
    
    const magnitude = Math.sqrt(real * real + imag * imag);
    const phase = Math.atan2(imag, real);
    dft.push({ magnitude, phase });
  }
  
  return dft;
}

function generateUnitRampSignal(length) {
  const signal = [];
  
  for (let i = 0; i < length; i++) {
    signal.push(i);
  }
  
  return signal;
}

function shiftSignal(signal, shift) {
  const shiftedSignal = [];
  const length = signal.length;
  
  for (let i = 0; i < length; i++) {
    const shiftedIndex = (i + shift) % length;
    shiftedSignal[shiftedIndex] = signal[i];
  }
  
  return shiftedSignal;
}

function plotSpectrum() {
  const shift = parseInt(document.getElementById('shift').value);
  const dftPoints = parseInt(document.getElementById('dft-points').value);
  const numSamples = parseInt(document.getElementById('num-samples').value);
  
  const inputSignal = generateUnitRampSignal(numSamples);
  
  // Shift the signal before calculating DFT
  const shiftedSignal = shiftSignal(inputSignal, shift);

  const dft = calculateDFT(shiftedSignal, dftPoints);

  const chartsContainer = document.getElementById('charts-container');
  chartsContainer.innerHTML = '';

  const magnitudeChartContainer = document.createElement('div');
  magnitudeChartContainer.className = 'chart-container';

  const magnitudeChartCanvas = document.createElement('canvas');
  magnitudeChartCanvas.id = 'magnitude-chart';
  magnitudeChartContainer.appendChild(magnitudeChartCanvas);

  chartsContainer.appendChild(magnitudeChartContainer);

  const phaseChartContainer = document.createElement('div');
  phaseChartContainer.className = 'chart-container';

  const phaseChartCanvas = document.createElement('canvas');
  phaseChartCanvas.id = 'phase-chart';
  phaseChartContainer.appendChild(phaseChartCanvas);

  chartsContainer.appendChild(phaseChartContainer);

  const magnitudeCtx = document.getElementById('magnitude-chart').getContext('2d');
  new Chart(magnitudeCtx, {
    type: 'bar',
    data: {
      labels: Array.from(Array(dftPoints).keys()),
      datasets: [
        {
          label: 'Magnitude Spectrum of unit Ramp signal',
          data: dft.map((entry) => entry.magnitude),
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
            text: 'No. of samples'
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

  const phaseCtx = document.getElementById('phase-chart').getContext('2d');
  
  // Modify phase values to place smaller values in the middle
  const modifiedPhase = dft.map((entry) => entry.phase).map((phase) => {
    if (phase > Math.PI) {
      return phase - 2 * Math.PI;
    } else {
      return phase;
    }
  });
  
  new Chart(phaseCtx, {
    type: 'bar',
    data: {
      labels: Array.from(Array(dftPoints).keys()).reverse(),
      datasets: [
        {
          label: 'Phase Spectrum of Unit ramp signal',
          data: modifiedPhase.reverse(),
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
            text: 'No. of samples'
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
