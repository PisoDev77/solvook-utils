import { useState } from 'react';

export default function 지문추출() {
    const [ta1, setTa1] = useState();
    const [res1, setRes1] = useState([]);

    const metadata1 = (str) => {
        const res = str
            .split(/\✽|\*/)
            .filter((i) => i.trim() !== '')
            .map((i) =>
                i
                    // .replace(/\:/g, '')
                    .replace(/\:/g, ' : ')
                    .replace(/([A-Za-z])\s+([가-힣\(\[])/g, (_, eng, kor) => `${eng} : ${kor}`)
                    .trim()
            );
        // return res.map((i) => [i, <br />]);
        // return res.join('{조인}');
        return <pre>{res.join(`\n`)}</pre>;
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setTa1(value);

        const tmp = value
            .split('{과}')
            .filter((i) => i.trim() !== '')
            .map((i) => i.split('{페이지}').map((j) => j.split('//')));

        const arr = [' sample ', ' converation 1', ' lecture 1', ' converation 2', ' lecture 2', ' challenge '];
        const arr2 = ['converation 01번-05번', 'lecture 06번-10번'];
        const res = tmp.map((i, idx) => {
            const am = i.map((j, idx2) => (
                <tr>
                    {/* <td>{'Actual Test'}</td> */}
                    <td>{'Actual Test ' + (idx + 1) + '회'}</td>
                    {/* <td>{'Unit ' + (idx2 === 4 ? 'TEST ' : '') + (idx + 1 + '').padStart(2, '0') + ''}</td> */}
                    {/* <td>{'Unit ' + (idx + 7 + '').padStart(2, '0') + ''}</td>
                    <td>{arr[idx2] + (idx2 === 0 || idx2 === 5 ? (idx + 7 + '').padStart(2, '0') : '')}</td> */}
                    {/* <td>{'Progress Test ' + (idx + 4 + '').padStart(2, '0') + ''}</td>
                    <td>{arr2[idx2]}</td> */}
                    {/* <td>{idx + 1 + ' 과'}</td> */}
                    {/* <td>
                        {idx2 === 0
                            ? 'Strategy Preview'
                            : idx2 === 4
                            ? '01번-10번'
                            : 'step ' + (idx2 + '').padStart(2, '0') + ''}
                    </td> */}
                    {/* <td>{(idx2 + 1 + '').padStart(2, '0') + '번'}</td> */}
                    {/* <td>{'본문 ' + (idx2 + 1 + '').padStart(2, '0')}</td> */}
                    <td>
                        {(idx2 * 5 + 1 + '').padStart(2, '0') + '번-' + (idx2 * 5 + 5 + '').padStart(2, '0') + '번'}
                    </td>
                    {/* <td>{idx2 + 1 + '번'}</td> */}
                    {/* <td>{`Reading ${(idx2 + 1 + '').padStart(2, '0')}`}</td> */}
                    {/* <td style={{}}>{j[0]}</td> */}
                    <td style={{}}>{j[0].replace(/\n/, ' ')}</td>
                    <td style={{}}>{j[1] ? metadata1(j[1]) : ''}</td>
                </tr>
            ));

            return am;
        });

        setRes1(res);
    };

    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start' }}>
                <textarea
                    style={{ padding: '1rem', minWidth: '30%' }}
                    value={ta1}
                    cols="60"
                    rows="50"
                    onChange={handleChange}
                ></textarea>
                <table border={1} style={{ padding: '1rem' }}>
                    <tbody>{res1}</tbody>
                </table>
            </div>
        </main>
    );
}
