import { useLocation } from 'react-router-dom';
import '../styles/page.css';

import Accordion from '../components/Accordion';
import SubPages from '../components/SubPages';

export default function UiComponents() {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const pageName = queryParams.get('page') ?? 'default'; // query string에서 'page' 파라미터 값을 가져옴

	const Uicomponents = {
		default: UiComponentsSubPage,
		accordion: Accordion,
	};

	const Uicomponent = Uicomponents[pageName] ?? (() => <h1>{pageName}이라는 페이지는 없습니다</h1>);

	return <Uicomponent />;
}

function UiComponentsSubPage() {
	return <SubPages subpages={[{ name: 'Accordion', path: '/uicomponents?page=accordion' }]} PageIcon={Icon} />;
}

function Icon() {
	return (
		<svg width='298' height='190' viewBox='0 0 150 163' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M75 18.75L93.75 37.5L75 56.25L56.25 37.5L75 18.75Z'
				stroke='#1B9252'
				strokeWidth='10'
				strokeLinejoin='round'
			/>
			<path
				d='M75 93.75L93.75 112.5L75 131.25L56.25 112.5L75 93.75Z'
				stroke='#1B9252'
				strokeWidth='10'
				strokeLinejoin='round'
			/>
			<path
				d='M112.5 56.25L131.25 75L112.5 93.75L93.75 75L112.5 56.25Z'
				stroke='#1B9252'
				strokeWidth='10'
				strokeLinejoin='round'
			/>
			<path
				d='M37.5 56.25L56.25 75L37.5 93.75L18.75 75L37.5 56.25Z'
				stroke='#1B9252'
				strokeWidth='10'
				strokeLinejoin='round'
			/>
			<path
				d='M28.5215 148.091H30.828V155.175C30.828 155.971 30.638 156.667 30.258 157.263C29.8816 157.86 29.3542 158.325 28.676 158.659C27.9977 158.989 27.2076 159.154 26.3056 159.154C25.4 159.154 24.6081 158.989 23.9299 158.659C23.2516 158.325 22.7243 157.86 22.3478 157.263C21.9714 156.667 21.7832 155.971 21.7832 155.175V148.091H24.0897V154.978C24.0897 155.394 24.1802 155.763 24.3613 156.086C24.546 156.409 24.8052 156.663 25.139 156.848C25.4728 157.033 25.8617 157.125 26.3056 157.125C26.753 157.125 27.1419 157.033 27.4721 156.848C27.8059 156.663 28.0634 156.409 28.2445 156.086C28.4292 155.763 28.5215 155.394 28.5215 154.978V148.091ZM32.283 159V150.818H34.5522V159H32.283ZM33.4229 149.763C33.0855 149.763 32.7961 149.652 32.5546 149.428C32.3167 149.201 32.1978 148.929 32.1978 148.613C32.1978 148.3 32.3167 148.032 32.5546 147.809C32.7961 147.581 33.0855 147.468 33.4229 147.468C33.7603 147.468 34.0479 147.581 34.2858 147.809C34.5273 148.032 34.648 148.3 34.648 148.613C34.648 148.929 34.5273 149.201 34.2858 149.428C34.0479 149.652 33.7603 149.763 33.4229 149.763ZM48.7095 151.91H46.3764C46.3338 151.608 46.2468 151.34 46.1154 151.106C45.984 150.868 45.8154 150.665 45.6094 150.499C45.4034 150.332 45.1655 150.204 44.8956 150.115C44.6293 150.026 44.3399 149.982 44.0274 149.982C43.4627 149.982 42.9709 150.122 42.5519 150.403C42.1328 150.68 41.8079 151.085 41.5771 151.617C41.3463 152.146 41.2309 152.789 41.2309 153.545C41.2309 154.323 41.3463 154.977 41.5771 155.506C41.8115 156.035 42.1382 156.434 42.5572 156.704C42.9762 156.974 43.461 157.109 44.0114 157.109C44.3203 157.109 44.6062 157.068 44.869 156.987C45.1353 156.905 45.3715 156.786 45.5774 156.63C45.7834 156.47 45.9539 156.276 46.0888 156.049C46.2273 155.822 46.3232 155.562 46.3764 155.271L48.7095 155.282C48.6492 155.783 48.4983 156.266 48.2568 156.731C48.0188 157.192 47.6975 157.606 47.2926 157.972C46.8914 158.334 46.412 158.622 45.8544 158.835C45.3005 159.044 44.6737 159.149 43.9741 159.149C43.0011 159.149 42.1311 158.929 41.364 158.489C40.6005 158.048 39.9968 157.411 39.5529 156.576C39.1126 155.742 38.8924 154.732 38.8924 153.545C38.8924 152.356 39.1161 151.344 39.5636 150.509C40.011 149.675 40.6183 149.039 41.3853 148.602C42.1524 148.162 43.0153 147.942 43.9741 147.942C44.6062 147.942 45.1921 148.031 45.7319 148.208C46.2752 148.386 46.7564 148.645 47.1755 148.986C47.5945 149.323 47.9354 149.737 48.1982 150.227C48.4645 150.717 48.635 151.278 48.7095 151.91ZM53.6176 159.16C52.7902 159.16 52.0746 158.984 51.4709 158.632C50.8708 158.277 50.4074 157.784 50.0807 157.152C49.754 156.516 49.5906 155.779 49.5906 154.941C49.5906 154.096 49.754 153.357 50.0807 152.725C50.4074 152.089 50.8708 151.596 51.4709 151.244C52.0746 150.889 52.7902 150.712 53.6176 150.712C54.445 150.712 55.1588 150.889 55.7589 151.244C56.3626 151.596 56.8278 152.089 57.1545 152.725C57.4812 153.357 57.6446 154.096 57.6446 154.941C57.6446 155.779 57.4812 156.516 57.1545 157.152C56.8278 157.784 56.3626 158.277 55.7589 158.632C55.1588 158.984 54.445 159.16 53.6176 159.16ZM53.6283 157.402C54.0047 157.402 54.319 157.295 54.5711 157.082C54.8232 156.866 55.0132 156.571 55.141 156.198C55.2724 155.825 55.3381 155.401 55.3381 154.925C55.3381 154.449 55.2724 154.025 55.141 153.652C55.0132 153.279 54.8232 152.984 54.5711 152.768C54.319 152.551 54.0047 152.443 53.6283 152.443C53.2483 152.443 52.9287 152.551 52.6695 152.768C52.4138 152.984 52.2202 153.279 52.0888 153.652C51.961 154.025 51.8971 154.449 51.8971 154.925C51.8971 155.401 51.961 155.825 52.0888 156.198C52.2202 156.571 52.4138 156.866 52.6695 157.082C52.9287 157.295 53.2483 157.402 53.6283 157.402ZM58.7201 159V150.818H60.8827V152.262H60.9786C61.1491 151.782 61.4332 151.404 61.8309 151.127C62.2286 150.85 62.7045 150.712 63.2584 150.712C63.8195 150.712 64.2972 150.852 64.6913 151.132C65.0855 151.409 65.3483 151.786 65.4797 152.262H65.5649C65.7318 151.793 66.0337 151.418 66.4704 151.138C66.9108 150.854 67.431 150.712 68.0312 150.712C68.7947 150.712 69.4143 150.955 69.8902 151.441C70.3696 151.924 70.6093 152.61 70.6093 153.498V159H68.3454V153.945C68.3454 153.49 68.2247 153.15 67.9832 152.922C67.7418 152.695 67.4399 152.581 67.0777 152.581C66.6658 152.581 66.3444 152.713 66.1136 152.975C65.8827 153.235 65.7673 153.577 65.7673 154.004V159H63.5674V153.897C63.5674 153.496 63.452 153.176 63.2212 152.938C62.9939 152.7 62.6938 152.581 62.3209 152.581C62.0688 152.581 61.8415 152.645 61.6391 152.773C61.4403 152.897 61.2822 153.073 61.165 153.3C61.0479 153.524 60.9893 153.787 60.9893 154.089V159H58.7201ZM72.0017 162.068V150.818H74.2389V152.192H74.3402C74.4396 151.972 74.5834 151.749 74.7716 151.521C74.9634 151.29 75.212 151.099 75.5174 150.946C75.8263 150.79 76.2098 150.712 76.6679 150.712C77.2645 150.712 77.8149 150.868 78.3192 151.18C78.8235 151.489 79.2265 151.956 79.5284 152.581C79.8302 153.203 79.9811 153.982 79.9811 154.92C79.9811 155.832 79.8338 156.603 79.539 157.232C79.2478 157.857 78.8501 158.331 78.3458 158.654C77.8451 158.973 77.284 159.133 76.6626 159.133C76.2223 159.133 75.8476 159.06 75.5387 158.915C75.2333 158.769 74.9829 158.586 74.7876 158.366C74.5923 158.142 74.4431 157.917 74.3402 157.69H74.2709V162.068H72.0017ZM74.223 154.909C74.223 155.396 74.2904 155.82 74.4254 156.182C74.5603 156.544 74.7556 156.827 75.0113 157.029C75.267 157.228 75.5777 157.327 75.9435 157.327C76.3128 157.327 76.6253 157.226 76.881 157.024C77.1367 156.818 77.3302 156.534 77.4616 156.172C77.5965 155.806 77.664 155.385 77.664 154.909C77.664 154.437 77.5983 154.021 77.4669 153.663C77.3355 153.304 77.142 153.023 76.8863 152.821C76.6306 152.619 76.3164 152.517 75.9435 152.517C75.5742 152.517 75.2617 152.615 75.006 152.81C74.7539 153.006 74.5603 153.283 74.4254 153.641C74.2904 154 74.223 154.423 74.223 154.909ZM84.7907 159.16C83.9632 159.16 83.2477 158.984 82.644 158.632C82.0439 158.277 81.5804 157.784 81.2537 157.152C80.927 156.516 80.7637 155.779 80.7637 154.941C80.7637 154.096 80.927 153.357 81.2537 152.725C81.5804 152.089 82.0439 151.596 82.644 151.244C83.2477 150.889 83.9632 150.712 84.7907 150.712C85.6181 150.712 86.3318 150.889 86.932 151.244C87.5357 151.596 88.0009 152.089 88.3276 152.725C88.6543 153.357 88.8176 154.096 88.8176 154.941C88.8176 155.779 88.6543 156.516 88.3276 157.152C88.0009 157.784 87.5357 158.277 86.932 158.632C86.3318 158.984 85.6181 159.16 84.7907 159.16ZM84.8013 157.402C85.1777 157.402 85.492 157.295 85.7441 157.082C85.9963 156.866 86.1863 156.571 86.3141 156.198C86.4455 155.825 86.5112 155.401 86.5112 154.925C86.5112 154.449 86.4455 154.025 86.3141 153.652C86.1863 153.279 85.9963 152.984 85.7441 152.768C85.492 152.551 85.1777 152.443 84.8013 152.443C84.4213 152.443 84.1017 152.551 83.8425 152.768C83.5868 152.984 83.3933 153.279 83.2619 153.652C83.134 154.025 83.0701 154.449 83.0701 154.925C83.0701 155.401 83.134 155.825 83.2619 156.198C83.3933 156.571 83.5868 156.866 83.8425 157.082C84.1017 157.295 84.4213 157.402 84.8013 157.402ZM92.1623 154.27V159H89.8931V150.818H92.0558V152.262H92.1517C92.3328 151.786 92.6364 151.409 93.0625 151.132C93.4887 150.852 94.0054 150.712 94.6126 150.712C95.1808 150.712 95.6762 150.836 96.0988 151.085C96.5213 151.333 96.8498 151.688 97.0842 152.15C97.3186 152.608 97.4358 153.155 97.4358 153.79V159H95.1666V154.195C95.1701 153.695 95.0423 153.304 94.7831 153.023C94.5238 152.739 94.1669 152.597 93.7124 152.597C93.407 152.597 93.1371 152.663 92.9027 152.794C92.6719 152.926 92.4908 153.118 92.3594 153.37C92.2316 153.618 92.1659 153.918 92.1623 154.27ZM102.553 159.16C101.711 159.16 100.987 158.989 100.38 158.648C99.7759 158.304 99.3107 157.817 98.984 157.189C98.6573 156.557 98.4939 155.809 98.4939 154.946C98.4939 154.105 98.6573 153.366 98.984 152.73C99.3107 152.095 99.7706 151.599 100.364 151.244C100.96 150.889 101.66 150.712 102.462 150.712C103.002 150.712 103.505 150.799 103.97 150.973C104.439 151.143 104.847 151.401 105.195 151.745C105.546 152.089 105.82 152.523 106.015 153.045C106.211 153.563 106.308 154.17 106.308 154.866V155.49H99.3995V154.083H104.172C104.172 153.757 104.101 153.467 103.959 153.215C103.817 152.963 103.62 152.766 103.368 152.624C103.119 152.478 102.83 152.406 102.5 152.406C102.155 152.406 101.85 152.485 101.583 152.645C101.321 152.801 101.115 153.013 100.966 153.279C100.816 153.542 100.74 153.835 100.736 154.158V155.495C100.736 155.9 100.811 156.25 100.96 156.544C101.113 156.839 101.328 157.066 101.605 157.226C101.882 157.386 102.21 157.466 102.59 157.466C102.842 157.466 103.073 157.43 103.283 157.359C103.492 157.288 103.671 157.182 103.821 157.04C103.97 156.898 104.083 156.724 104.162 156.518L106.26 156.656C106.154 157.161 105.935 157.601 105.605 157.977C105.278 158.35 104.856 158.641 104.337 158.851C103.822 159.057 103.228 159.16 102.553 159.16ZM109.658 154.27V159H107.389V150.818H109.552V152.262H109.648C109.829 151.786 110.132 151.409 110.558 151.132C110.985 150.852 111.501 150.712 112.108 150.712C112.677 150.712 113.172 150.836 113.595 151.085C114.017 151.333 114.346 151.688 114.58 152.15C114.814 152.608 114.932 153.155 114.932 153.79V159H112.662V154.195C112.666 153.695 112.538 153.304 112.279 153.023C112.02 152.739 111.663 152.597 111.208 152.597C110.903 152.597 110.633 152.663 110.399 152.794C110.168 152.926 109.987 153.118 109.855 153.37C109.727 153.618 109.662 153.918 109.658 154.27ZM120.672 150.818V152.523H115.745V150.818H120.672ZM116.863 148.858H119.133V156.486C119.133 156.695 119.165 156.859 119.228 156.976C119.292 157.089 119.381 157.169 119.495 157.216C119.612 157.262 119.747 157.285 119.9 157.285C120.006 157.285 120.113 157.276 120.219 157.258C120.326 157.237 120.407 157.221 120.464 157.21L120.821 158.899C120.708 158.934 120.548 158.975 120.342 159.021C120.136 159.071 119.885 159.101 119.591 159.112C119.044 159.133 118.564 159.06 118.152 158.893C117.744 158.727 117.426 158.467 117.199 158.116C116.972 157.764 116.86 157.32 116.863 156.784V148.858ZM128.455 153.151L126.378 153.279C126.342 153.102 126.266 152.942 126.149 152.8C126.032 152.654 125.877 152.539 125.685 152.453C125.497 152.365 125.272 152.32 125.009 152.32C124.657 152.32 124.361 152.395 124.119 152.544C123.878 152.69 123.757 152.885 123.757 153.13C123.757 153.325 123.835 153.49 123.991 153.625C124.148 153.76 124.416 153.869 124.796 153.95L126.277 154.249C127.072 154.412 127.665 154.675 128.056 155.037C128.446 155.399 128.642 155.875 128.642 156.464C128.642 157.001 128.484 157.471 128.168 157.876C127.855 158.281 127.425 158.597 126.878 158.824C126.335 159.048 125.708 159.16 124.998 159.16C123.915 159.16 123.052 158.934 122.409 158.483C121.77 158.029 121.395 157.411 121.285 156.63L123.517 156.512C123.585 156.843 123.748 157.095 124.007 157.269C124.267 157.439 124.599 157.525 125.003 157.525C125.401 157.525 125.721 157.448 125.962 157.295C126.207 157.139 126.332 156.939 126.335 156.694C126.332 156.488 126.245 156.319 126.074 156.188C125.904 156.053 125.641 155.95 125.286 155.879L123.869 155.596C123.07 155.436 122.475 155.159 122.084 154.765C121.697 154.371 121.504 153.869 121.504 153.258C121.504 152.732 121.646 152.279 121.93 151.9C122.218 151.52 122.621 151.227 123.139 151.021C123.661 150.815 124.272 150.712 124.971 150.712C126.005 150.712 126.818 150.93 127.411 151.367C128.008 151.804 128.356 152.398 128.455 153.151Z'
				fill='#1B9252'
			/>
		</svg>
	);
}
