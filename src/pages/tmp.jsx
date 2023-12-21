import { useState } from 'react';
import axios from 'axios';

import './tmp.css';

import { Onesam } from '../lib/TypesPDF/index';
import Button from '../components/Button';
import { CopytextButton } from '../components/Button/Button.stories';

import { Answer, Essay, Options, Passage, Question } from '../lib/ParsingComponents';
import StrongUnderline from '../lib/StrongUnderline';

export default function Tmp() {
    const [res, setRes] = useState([]);
    const [amount, setAmount] = useState(0);

    const [paragraphs, setParagraphs] = useState({
        product_id: '',
        paragraphA: '',
        paragraphB: '',
    });

    const ids = [
        '9^9ATBmNIYY-DqSnJlZquOqy9^9',
        '9^9FDpBvxCM4ofpbxeveCein9^9',
        '9^9-c0hF9QCUica7Mob4h05U9^9',
        '9^9M10wwWIIt2fCGqxvUBVRR9^9',
        '9^9k8pAvCTPEKduFgl_HLQn89^9',
        '9^9OWv9aecJzIFRjmNad5Fww9^9',
        '9^9K08r_rxHplnRAeN4XI3R_9^9',
        '9^9rXA4dGxGIXABcjCYHqHl09^9',
        '9^9ooL5snxa3YD1yOIHXrLdB9^9',
        '9^9jrUlS8UxKzEkHUwlpDlu49^9',
        '9^9rbkZVPgwmkDtqcC5LK1w39^9',
        '9^9Bb0MJ03BhoD4y8NCnJHk59^9',
        '9^9Ksz80Oz5p2XKIyQsm_g_49^9',
        '9^9OGGTUc7eFhq3ajw9p9pcv9^9',
        '9^97TIBdKc27Oco-gnuxGF_59^9',
        '9^9a8jwxWRtBTgKmeNIfjWEl9^9',
        '9^9uAKr83VUYEjsphLnN_nd69^9',
        '9^9ZEjpuhSn-lBqizkM2X98Q9^9',
        '9^98ZjYbPhjdNiCjbSg3FlO_9^9',
        '9^9WdNE0M-0yK4SiQkVHdGtn9^9',
        '9^9vJIul37my0xtTltdnKKtt9^9',
        '9^9pQJztN8eiKYADJAtSMZ7B9^9',
        '9^9bja73X3h5Htu5pani83-Z9^9',
        '9^9pqneCt9C0v5T6Q0Tz77pg9^9',
        '9^9XWW6GPaLTFKARmM9-B-XJ9^9',
        '9^9qyIAtKyOdrDVF90iNDYwc9^9',
        '9^9z1m3KA9TfDm3Wd38PlLLe9^9',
        '9^9Ys4RIbW3fj07Y0d9ywXz09^9',
        '9^9Lar_ElvubBPdocc6fxSNq9^9',
        '9^9dstStqPAD9FmKTdvD4VAA9^9',
        '9^9WruS527-g8s9lpShX0IgW9^9',
        '9^9Slu0JKK742vvvfmmzMIv59^9',
        '9^9xPYyN36FXxGj4HC7OyhUC9^9',
        '9^9kMfOP7IYwHR5lj8yXBYUL9^9',
        '9^9r9KEtKhny0sLWsnl_1dh29^9',
        '9^9Pd_XjTtVwl3FLdh0HaKcf9^9',
        '9^9ouBnu-nDRxUkxIHIdkENx9^9',
        '9^9mdTdGg8K0Fb1ZSZ2HTX1h9^9',
        '9^9ctaON_cXZ5Vj9kpsCNRn79^9',
        '9^9_HR0VMBH2PxBFAPWwZ7IV9^9',
        '9^9FxLsmSKERrTFU7jIWvEJ79^9',
        '9^97GHWprhCoz50P3AfVbjbV9^9',
        '9^92qhukOP5gvyzGin0HRNBt9^9',
        '9^9BRI-fmskFIvKj6-w35Tig9^9',
        '9^9OX19qpYPzD8OJucR4okI89^9',
        '9^9lHhLkj3K_igcXsDzMcSM-9^9',
        '9^9GAgSALXViaMMl51hyvcYb9^9',
        '9^9Okwtbp-h8DRxm1XVyMAJn9^9',
        '9^9fCicwqH6zB4bfOoY8Z4PO9^9',
        '9^9_yOf63yBNzta7rHfPWWaB9^9',
        '9^9G6GT9OBynfCBgQ_uh2XyB9^9',
        '9^9Xf5-70qD66aTL2YCaWReV9^9',
        '9^9zYkL48Rrq0hC6ZK74cO_G9^9',
        '9^9yRUzv9qRZ-IfXpeIO_OKZ9^9',
        '9^9iorqef1chL82HWiAXWw0j9^9',
        '9^9MhPaeznml_929L2loX7Hz9^9',
        '9^9S-skGOjZ8JNqeuZG2LEOW9^9',
        '9^9rytoWJ7o5xTBhSUi3fdAl9^9',
        '9^9nxtFz27V-KWUwm68qJLsU9^9',
        '9^9CSf1npzCCdsaegXPgaAMU9^9',
        '9^90TRV7zehVItNq27BzLbGF9^9',
        '9^9urC8ZIM5VWp7umVM2ihAK9^9',
        '9^9679M-7bPDw_zU3F03DT_q9^9',
        '9^9X4_f0W-HhbCIria6LEx1t9^9',
        '9^9k9-8-Bo__hJLd5u_2vhQG9^9',
        '9^9fsaXVrKsNV_M04R4qpYc_9^9',
        '9^9AuDCXKU8gjVBTacXxI-3G9^9',
        '9^9EojWCLN0FmBvSv4nRusOV9^9',
        '9^9lw4pXbAjoAGMdDQOvRrx69^9',
        '9^9r9poFmkerA3dvI8nyRnM39^9',
        '9^92m-dwA3yJCKZmpwQ_Wfb59^9',
        '9^9BKeukM-xk5Wh193Kqslss9^9',
        '9^9-1uRCh1LNCD2naNuU7t_C9^9',
        '9^9EW3UQRO_lSxzD1GG8KZ7D9^9',
        '9^9yCko08kknRboVaRny4x1v9^9',
        '9^9OHlCF7DTNRh0xNu7nAGOZ9^9',
        '9^9MIsHGZV9rUAVTv0uWjRSW9^9',
        '9^9S4CvTrf9MxYPfyrn0CSxc9^9',
        '9^9l5uw6_pQ4nvZlHwmmRSsY9^9',
        '9^9_ns0kRaGqZumxVsKJR6MJ9^9',
        '9^99lPoNNl3MwbSK-de1rV1k9^9',
        '9^9MwFfXg9EnVjjrHC3GqOSR9^9',
        '9^9FPvm2HTEg7Dh1pzs4GqgY9^9',
        '9^915L_8PprXc8RH4NXS2hpj9^9',
        '9^9ySDu39q_SV4OSV_uKt0NT9^9',
        '9^9nVvb3ljggtI1QwDxdTBT_9^9',
        '9^9G3kDIah0Ncfi8HPiB6di39^9',
        '9^97BC8wO7D_Lcub4ocD373B9^9',
        '9^9vlLy5GDRGkx_LcJ-cRrzb9^9',
        '9^9NkAdiJiGXqqqwXyfxaXu49^9',
        '9^9R-P0HGt0ZDHlrrJ8G9C9i9^9',
        '9^9TMU-B74mlY3IQMn5PabIL9^9',
        '9^9OKq9dOr2keD0iVNynxVvn9^9',
        '9^9KzW6l9PfPmF4fSW4ewCtm9^9',
        '9^9ivtozPlTkt8Q7Oxdcktli9^9',
        '9^9Jd0h94L0Fqamlvw2a09jE9^9',
        '9^9kGJ7vD_UYvQJG155f5PRw9^9',
        '9^9zrC5AXcpKEXMh4BNUGf6G9^9',
        '9^9Ex33w1xxQoKc6HCDpk7fU9^9',
        '9^96k3Qu2RFfoKn7qwppdluK9^9',
    ];

    const handleSave = (e, tag, idx) => {
        e.preventDefault();
        if (!confirm('저장할꺼야?')) return;

        const uuid = ids[idx];

        const DOMStr = [...e.target.previousElementSibling.children].map((i) => i.outerHTML).join('');

        const ss = `<div id="${uuid}"
    class="question-wrap"
    style="font-size: 10pt;"
    data-mce-style="font-size: 10pt;">
    ${DOMStr}
    </div>`;

        const payload = {
            product_id: paragraphs.product_id,
            tag,
            data_type: 'question_unit',
            data_value: ss,
            version: '20230328',
        };
        console.log(payload);
        axios.post('/api/v1/handout-data-item', payload);
    };

    const handleSaveAll = () => {
        console.log(document.querySelectorAll('.question-wrap'));
        if (!confirm('모두 저장할꺼야?')) return;

        document.querySelectorAll('.question-wrap').forEach((unit, idx) => {
            const payload = {
                product_id: paragraphs.product_id,
                tag: unit.previousElementSibling.textContent,
                data_type: 'question_unit',
                data_value: `<div id="${ids[idx]}"
        class="question-wrap"
        style="font-size: 10pt;"
        data-mce-style="font-size: 10pt;">
        ${unit.innerHTML}
        </div>`,
                version: '20230328',
            };
            console.log(payload);
            axios.post('/api/v1/handout-data-item', payload);
        });
    };

    const handleParagraphs = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        const paragraphs_con = {};
        paragraphs_con[name] = value;
        setParagraphs({
            ...paragraphs,
            ...paragraphs_con,
            product_id: e.currentTarget.product_id.value,
        });
        const { paragraphA, paragraphB, startNo } = e.currentTarget;

        // 문제 마지막에 {문제}를 추가 해서 문제하나 단위로 끊기
        const parsingComponents = paragraphA.value.replace(/\n/g, '').split(/\{문제\}/g);
        setAmount(parsingComponents.length);
        parsingComponents.pop();

        const answers = paragraphB.value.split(/\d+\)/g).map((answer) => {
            const regex = /\{(.)\}/g;
            const res = !Number.isNaN(+answer.replace(/\n/g, ''))
                ? String.fromCharCode(0x2460 + +answer - 1)
                : regex.test(answer)
                ? answer
                      .split(regex)[2]
                      .split(answer.split(regex)[1])
                      .map((i, idx) => idx + 1 + ') ' + i.replace(/\n/g, '').trim())
                      .map((i) => <>{i}&nbsp;&nbsp;&nbsp;</>)
                : answer;
            return res;
        });
        answers.shift();
        // answer.split(answer.split(/\{.\}/g))

        // 질문과 본문으로 나눈다.
        let questionNo = +startNo.value;
        let answerIdx = 0;

        const questionProcess = parsingComponents.map((parsingComponent, idx) => {
            let noIdx = 0;
            let tagQ = [];
            let tagT = [];

            const [question, step1] = parsingComponent.split(/\{질문\}/g);
            if (question !== '통합') {
                tagQ.push(questionNo);
                if (question !== '통합2') {
                    tagT.push(question.split(/\{(\d+)\}/)[1]);
                }
            }

            const [$content, step2] = step1.split(/\{본문\}/g);

            const [contentStr, contentType = '기본'] = $content.split(/(\{.+\})/g);
            const contentTypes = {
                '{네모원}': 'boldIn',
                '{원}': 'boldWithLine',
                '{원순서}': 'boldWithLine',
                '{일반}': 'boldSqure',
                '{순서}': 'boldSqure',
                '{넘버링}': 'boldSqureWithNumber',
                '{문장}': 'boldSqure',
                '{둘다}': 'both',
                기본: 'str',
            };

            let contentRender = null;

            if (contentType === '{원순서}') {
                const [given, content] = contentStr.split('(A)');
                contentRender = [
                    new Passage(new StrongUnderline(given)[contentTypes[contentType]]).contentDOM,
                    new Passage(new StrongUnderline('(A) ' + content)[contentTypes[contentType]]).OrderTMP,
                ];
            } else if (contentStr.trim() === '') {
                contentRender = '';
            } else if (contentType === '{순서}') {
                contentRender = new Passage(contentStr).OrderDOM;
            } else if (contentType === '{문장}') {
                contentRender = contentStr.split('[지문]').map((i) => new Passage(i).contentDOM);
            } else {
                contentRender = new Passage(new StrongUnderline(contentStr)[contentTypes[contentType]]).contentDOM;
            }

            const stuffs = step2.split(/({서브질문}|{지문}|{주관식}|{가로선지}|{세로선지}|{ABC}|{AB}|{서브답})/g);

            const container = [];

            let cnt = 1;
            for (let i = 0; i < stuffs.length; i += 2) {
                const type = stuffs[i + 1];
                const tmp = stuffs[i];

                if (type === '{서브질문}') {
                    const tmp2 = tmp.split(/\{(\d+)\}/);
                    if (question !== '통합2') {
                        tagQ.push(questionNo);
                        tagT.push(tmp2[1]);
                    }
                    if (question === '통합2') {
                        tagT.push(tmp2[1]);
                    }

                    const tmpStr = tmp2[0].replace(/\d+\./g, '');
                    container.push(
                        // new Question(tmp).subQuestionDOM
                        new Question((question === '통합' ? questionNo++ + '.' : cnt++ + ') ') + tmpStr).subQuestionDOM
                    );
                }

                if (type === '{지문}') {
                    container.push(new Passage(tmp).contentDOM);
                }

                if (type === '{가로선지}') {
                    container.push(new Options(tmp).garoDOM);
                }

                if (type === '{세로선지}') {
                    container.push(new Options(tmp).seroDOM);
                }

                if (type === '{ABC}') {
                    container.push(new Options(tmp).ABCDOMByHipen);
                }

                if (type === '{AB}') {
                    container.push(new Options(tmp).ABDOMByHipen);
                }

                if (type === '{주관식}') {
                    container.push(new Essay(tmp.trim() === '' ? '→' : tmp).essayDOM);
                }

                if (
                    // (question === "통합" || question === "통합2") &&
                    type === '{서브답}'
                ) {
                    container.push(new Answer(answers[answerIdx++]).answerDOM);
                }
            }

            stuffs.pop();
            const tag = [...new Set(tagQ)].map((q) => q + '번').join(',') + ',1세트,' + [...new Set(tagT)].join(',');

            const jh =
                question === '통합2'
                    ? questionNo++ + '. ' + Question.getStandardQuestions('통합').replace('※', '')
                    : Question.getStandardQuestions('통합');
            return (
                // prettier-ignore
                <>
        {<><hr /><Button {...CopytextButton.args}>{tag}</Button></>}
        <div className="question-wrap">
          { question ==='통합'|| question ==='통합2' 
             ? new Question( jh ).questionDOM 
            //  : new Question(`${+startNo.value + idx}. ${question}`).questionDOM }
             : new Question(`${questionNo++}. ${question.replace(/\d+\./,'').replace(/\{\d+\}/g, "")}`).questionDOM }
          { contentRender }
          { container }
          { question === '통합' || question ==='통합2' || [...new Set(tagT)][0] === "5" ? '' : new Answer(answers[answerIdx++]).answerDOM }
        </div>
          {<button onClick={(e)=>{handleSave(e,tag,idx)}} >SAVE</button>}
        </>
            );
        });

        setRes(questionProcess);
    };

    const shortkeys = {
        ctrl: {
            1: '{}{질문}',
            2: '{일반}{본문}',
            22: '{순서}{본문}',
            23: '{문장}{본문}',
            24: '{일반}{본문}',
            25: '{원순서}{본문}',
            21: '{원}{본문}',
            0: `{서브질문}`,
            5: '{주관식}',
            4: '{ABC}',
        },
        alt: {
            b: '{문제}',
            0: '{서브답}',
            1: '통합{질문}',
            3: '{세로선지}',
            4: '{가로선지}',
        },
    };

    const funcTmp = (textarea, replaced) => {
        const cursorPosition = textarea.selectionStart; // 현재 커서 위치

        const text = textarea.value;
        const newText = text.slice(0, cursorPosition) + replaced + text.slice(cursorPosition); // 현재 커서 위치 다음에 '문자' 추가

        textarea.value = newText;
        textarea.selectionStart = textarea.selectionEnd = cursorPosition + 2; // 커서 위치 업데이트
    };

    const handleShortKey = (e) => {
        if (e.altKey) {
            if (!shortkeys.ctrl[e.key]) return;
            funcTmp(e.target, shortkeys.ctrl[e.key]);
        }

        if (e.ctrlKey) {
            if (!shortkeys.alt[e.key]) return;
            funcTmp(e.target, shortkeys.alt[e.key]);
        }
    };

    return (
        <>
            <div>
                {Object.values(shortkeys.ctrl).map((i) => (
                    <Button {...CopytextButton.args} type="copy-text-button">
                        {i}
                    </Button>
                ))}
                <br />
                {Object.values(shortkeys.alt).map((i) => (
                    <Button {...CopytextButton.args} type="copy-text-button">
                        {i}
                    </Button>
                ))}
            </div>
            <button type="button" onClick={handleSaveAll}>
                saveAll
            </button>
            <hr />

            <form className="tmp-container" onChange={handleParagraphs}>
                <div className="tmp-inputs">
                    <label>product_id {amount > 0 ? '문제 개수: ' + amount + 'ea' : ''}</label>
                    <input type={'text'} name="product_id" />
                    <label>질문 번호</label>
                    <input type={'number'} name="startNo" />
                    <div>
                        <div className="tmp-inputs-ta" onKeyDown={handleShortKey}>
                            <label>paragraphA</label>
                            <textarea
                                tyle={{ resize: 'both' }}
                                value={paragraphs.paragraphA}
                                name="paragraphA"
                            ></textarea>
                        </div>
                        <div className="tmp-inputs-ta">
                            <label>paragraphB</label>
                            <textarea
                                tabIndex={0}
                                style={{ resize: 'both' }}
                                value={paragraphs.paragraphB}
                                name="paragraphB"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <section className="tmp-res">{res}</section>
            </form>
        </>
    );
}
