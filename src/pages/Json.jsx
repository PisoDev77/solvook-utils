import SubPages from '../components/SubPages';
import '../styles/page.css';
import Timer from './Timer';

export default function Json() {
	return <SubPages pageName={''} subpages={[{ name: 'JSON 열어보기', path: '/openJSON' }]} PageIcon={Icon} />;
}

function Icon() {
	return (
		<svg width='161' height='190' viewBox='0 0 161 190' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M4.66552 70.5199V64.9716C9.64705 64.9716 13.1222 63.9276 15.0909 61.8395C17.0895 59.7514 18.0888 56.2614 18.0888 51.3693V37.0511C18.0888 32.9347 18.4766 29.37 19.2522 26.3572C20.0576 23.3445 21.3551 20.8537 23.1449 18.8849C24.9347 16.9162 27.3211 15.4545 30.304 14.5C33.287 13.5455 36.9709 13.0682 41.3559 13.0682V21.8381C37.8956 21.8381 35.1662 22.375 33.1676 23.4489C31.1989 24.5227 29.7969 26.1932 28.9617 28.4602C28.1563 30.6974 27.7536 33.5611 27.7536 37.0511V54.9489C27.7536 57.2756 27.4404 59.3935 26.814 61.3026C26.2174 63.2116 25.0988 64.8523 23.4581 66.2244C21.8175 67.5966 19.4759 68.6555 16.4333 69.4013C13.4205 70.147 9.4979 70.5199 4.66552 70.5199ZM41.3559 127.614C36.9709 127.614 33.287 127.136 30.304 126.182C27.3211 125.227 24.9347 123.766 23.1449 121.797C21.3551 119.828 20.0576 117.337 19.2522 114.325C18.4766 111.312 18.0888 107.747 18.0888 103.631V89.3125C18.0888 84.4205 17.0895 80.9304 15.0909 78.8423C13.1222 76.7543 9.64705 75.7102 4.66552 75.7102V70.1619C9.4979 70.1619 13.4205 70.5348 16.4333 71.2805C19.4759 72.0263 21.8175 73.0852 23.4581 74.4574C25.0988 75.8295 26.2174 77.4702 26.814 79.3793C27.4404 81.2884 27.7536 83.4062 27.7536 85.733V103.631C27.7536 107.121 28.1563 109.984 28.9617 112.222C29.7969 114.459 31.1989 116.114 33.1676 117.188C35.1662 118.292 37.8956 118.844 41.3559 118.844V127.614ZM4.66552 75.7102V64.9716H15.2252V75.7102H4.66552ZM156.323 70.1619V75.7102C151.342 75.7102 147.852 76.7543 145.853 78.8423C143.884 80.9304 142.9 84.4205 142.9 89.3125V103.631C142.9 107.747 142.497 111.312 141.692 114.325C140.916 117.337 139.634 119.828 137.844 121.797C136.054 123.766 133.668 125.227 130.685 126.182C127.702 127.136 124.018 127.614 119.633 127.614V118.844C123.093 118.844 125.808 118.292 127.776 117.188C129.775 116.114 131.177 114.459 131.982 112.222C132.818 109.984 133.235 107.121 133.235 103.631V85.733C133.235 83.4062 133.534 81.2884 134.13 79.3793C134.757 77.4702 135.89 75.8295 137.531 74.4574C139.171 73.0852 141.498 72.0263 144.511 71.2805C147.553 70.5348 151.491 70.1619 156.323 70.1619ZM119.633 13.0682C124.018 13.0682 127.702 13.5455 130.685 14.5C133.668 15.4545 136.054 16.9162 137.844 18.8849C139.634 20.8537 140.916 23.3445 141.692 26.3572C142.497 29.37 142.9 32.9347 142.9 37.0511V51.3693C142.9 56.2614 143.884 59.7514 145.853 61.8395C147.852 63.9276 151.342 64.9716 156.323 64.9716V70.5199C151.491 70.5199 147.553 70.147 144.511 69.4013C141.498 68.6555 139.171 67.5966 137.531 66.2244C135.89 64.8523 134.757 63.2116 134.13 61.3026C133.534 59.3935 133.235 57.2756 133.235 54.9489V37.0511C133.235 33.5611 132.818 30.6974 131.982 28.4602C131.177 26.1932 129.775 24.5227 127.776 23.4489C125.808 22.375 123.093 21.8381 119.633 21.8381V13.0682ZM156.323 64.9716V75.7102H145.764V64.9716H156.323Z'
				fill='#F5DE19'
			/>
			<path
				d='M31.2754 148.091H38.5709V172.432C38.5709 174.682 38.0652 176.636 37.0538 178.295C36.0538 179.955 34.6618 181.233 32.8777 182.131C31.0936 183.028 29.0197 183.477 26.6561 183.477C24.5538 183.477 22.6447 183.108 20.9288 182.369C19.2243 181.619 17.872 180.483 16.872 178.96C15.872 177.426 15.3777 175.5 15.3891 173.182H22.7357C22.7584 174.102 22.9459 174.892 23.2982 175.551C23.6618 176.199 24.1561 176.699 24.7811 177.051C25.4175 177.392 26.1675 177.562 27.0311 177.562C27.9402 177.562 28.7072 177.369 29.3322 176.983C29.9686 176.585 30.4516 176.006 30.7811 175.244C31.1107 174.483 31.2754 173.545 31.2754 172.432V148.091ZM63.2107 158.131C63.0743 156.756 62.4891 155.687 61.455 154.926C60.4209 154.165 59.0175 153.784 57.2447 153.784C56.0402 153.784 55.0232 153.955 54.1936 154.295C53.3641 154.625 52.7277 155.085 52.2845 155.676C51.8527 156.267 51.6368 156.938 51.6368 157.688C51.6141 158.312 51.7447 158.858 52.0288 159.324C52.3243 159.79 52.7277 160.193 53.2391 160.534C53.7504 160.864 54.3413 161.153 55.0118 161.403C55.6822 161.642 56.3982 161.847 57.1595 162.017L60.2959 162.767C61.8186 163.108 63.2163 163.562 64.4891 164.131C65.7618 164.699 66.8641 165.398 67.7959 166.227C68.7277 167.057 69.4493 168.034 69.9607 169.159C70.4834 170.284 70.7504 171.574 70.7618 173.028C70.7504 175.165 70.205 177.017 69.1254 178.585C68.0572 180.142 66.5118 181.352 64.4891 182.216C62.4777 183.068 60.0516 183.494 57.2107 183.494C54.3925 183.494 51.9379 183.062 49.847 182.199C47.7675 181.335 46.1425 180.057 44.972 178.364C43.8129 176.659 43.205 174.551 43.1482 172.04H50.2902C50.3697 173.21 50.705 174.187 51.2959 174.972C51.8982 175.744 52.6993 176.33 53.6993 176.727C54.7107 177.114 55.8527 177.307 57.1254 177.307C58.3754 177.307 59.4607 177.125 60.3811 176.761C61.3129 176.398 62.0345 175.892 62.5459 175.244C63.0572 174.597 63.3129 173.852 63.3129 173.011C63.3129 172.227 63.08 171.568 62.6141 171.034C62.1595 170.5 61.4891 170.045 60.6027 169.67C59.7277 169.295 58.6538 168.955 57.3811 168.648L53.58 167.693C50.6368 166.977 48.3129 165.858 46.6084 164.335C44.9038 162.812 44.0572 160.761 44.0686 158.182C44.0572 156.068 44.6197 154.222 45.7561 152.642C46.9038 151.062 48.4777 149.83 50.4777 148.943C52.4777 148.057 54.7504 147.614 57.2959 147.614C59.8868 147.614 62.1482 148.057 64.08 148.943C66.0232 149.83 67.5345 151.062 68.6141 152.642C69.6936 154.222 70.2504 156.051 70.2845 158.131H63.2107ZM107.406 165.545C107.406 169.352 106.684 172.591 105.241 175.261C103.809 177.932 101.855 179.972 99.3774 181.381C96.9115 182.778 94.1388 183.477 91.0592 183.477C87.957 183.477 85.1729 182.773 82.707 181.364C80.2411 179.955 78.2922 177.915 76.8604 175.244C75.4286 172.574 74.7126 169.341 74.7126 165.545C74.7126 161.739 75.4286 158.5 76.8604 155.83C78.2922 153.159 80.2411 151.125 82.707 149.727C85.1729 148.318 87.957 147.614 91.0592 147.614C94.1388 147.614 96.9115 148.318 99.3774 149.727C101.855 151.125 103.809 153.159 105.241 155.83C106.684 158.5 107.406 161.739 107.406 165.545ZM99.9229 165.545C99.9229 163.08 99.5536 161 98.8149 159.307C98.0876 157.614 97.0592 156.33 95.7297 155.455C94.4001 154.58 92.8433 154.142 91.0592 154.142C89.2751 154.142 87.7183 154.58 86.3888 155.455C85.0592 156.33 84.0251 157.614 83.2865 159.307C82.5592 161 82.1956 163.08 82.1956 165.545C82.1956 168.011 82.5592 170.091 83.2865 171.784C84.0251 173.477 85.0592 174.761 86.3888 175.636C87.7183 176.511 89.2751 176.949 91.0592 176.949C92.8433 176.949 94.4001 176.511 95.7297 175.636C97.0592 174.761 98.0876 173.477 98.8149 171.784C99.5536 170.091 99.9229 168.011 99.9229 165.545ZM141.672 148.091V183H135.297L120.11 161.028H119.854V183H112.473V148.091H118.95L134.019 170.045H134.325V148.091H141.672Z'
				fill='#F5DE19'
			/>
		</svg>
	);
}