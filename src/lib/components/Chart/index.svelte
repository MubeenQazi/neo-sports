<script lang="ts">
	import { Line } from 'svelte-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	export let data: any;
</script>

<Line
	{data}
	options={{
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			},
			tooltip: {
				backgroundColor: '#F8FAFB',
				borderColor: 'rgba(203, 222, 228, 0.6)',
				borderWidth: 1,
				titleColor: '#2C2C2D',
				bodyColor: '#2C2C2D',
				bodyFont: {
					weight: ' 900',
					size: 16
				},
				displayColors: false,
				position: 'nearest'
			}
		},
		scales: {
			x: {
				border: {
					display: true
				},
				grid: {
					display: false
				}
			},
			y: {
				grid: {
					display: true,
					tickBorderDash: [2, 5, 3],
					tickBorderDashOffset: 4,
					color: 'rgba(203, 222, 228, 0.6)'
				},
				border: {
					dash: [3, 10]
				},
				ticks: {
					stepSize: 5
				},

				beginAtZero: true
			}
		}
	}}
/>
