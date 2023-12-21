import Btn from '.';
import Copy from '../../lib/Copys';

import { toast } from 'react-toastify';

export default {
    title: 'Common/Btn',
    component: Btn,
};

const copyClsName = 'copy-text-btn';
export const CopytextBtn = {
    args: {
        className: copyClsName,
        onClick: (e) => {
            const wantedTxt = e.target.textContent;
            new Copy(wantedTxt, copyClsName).copyText();

            toast.success(`"${wantedTxt}" 복사 완료`, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        },
    },
};

export const ModalBtn = {
    args: {
        className: 'modal-btn',
    },
};

export const CloseBtn = {
    args: {
        className: 'close-btn',
    },
};
