import { useState } from 'react';
import './paragraph.css';

export default function Paragraph() {
    const [data, setData] = useState({
        str: '',
        res: [],
    });

    const lbs = [
        'textbook_id',
        'unit_id',
        'story_id',
        'paragraph_id',
        'paragraphs',
        'page_info',
        'meta_data',
        'filename',
    ];

    const oneTr = (val) => {
        const step1 = val.split(/\t/g);

        const arr = step1[4].split(/(\.|\!|\?)/g).map((i) => i.replace(/\n/g, '').trim());
        const paragraphs = arr.filter((i) => !/\.|\!|\?/.test(i.trim()));
        const dots = arr.filter((i) => /\.|\!|\?/.test(i.trim()));

        console.log(paragraphs, dots);

        const obj = {
            textbook_id: step1[0],
            unit_id: step1[1],
            story_id: step1[2],
            paragraph_id: step1[3],
            paragraphs: paragraphs.map((paragraph, idx) =>
                dots[idx] === undefined ? '삭제해' : paragraph + dots[idx]
            ),
            page_info: step1[5],
            meta_data: step1[6],
            filename: step1[7],
        };

        return (
            <>
                {' '}
                {obj.paragraphs.map((paragraph) => {
                    if (paragraph !== '삭제해')
                        return (
                            <tr>
                                <td>{obj.textbook_id}</td>
                                <td>{obj.unit_id}</td>
                                <td>{obj.story_id}</td>
                                <td>{obj.paragraph_id}</td>
                                <td>{paragraph}</td>
                                <td>{obj.page_info}</td>
                                <td></td>
                                <td>{obj.filename}</td>
                            </tr>
                        );
                })}
            </>
        );
    };

    const handleForm = (e) => {
        const { str } = e.currentTarget;

        const res = str.value
            .split('{구분}')
            .filter((i) => i.trim() !== '')
            .map((i) => oneTr(i));

        setData({
            str: str.value,
            res: <table border={1}>{res}</table>,
        });
    };

    return (
        <form onChange={handleForm}>
            <hr />
            <textarea value={data.str} name={'str'} style={{ resize: 'both', height: '20vh' }}></textarea>
            <br />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '80%' }}>{data.res}</div>
                {/* <div style={{ width: '20%' }}>{data.answers}</div> */}
            </div>
        </form>
    );
}
