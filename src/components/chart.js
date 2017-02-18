/**
 * Created by miketran on 2/17/17.
 */
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand } from 'react-sparklines';

export default (props) => {
    return(
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} style={{ fill: "none" }}/>
                <SparklinesNormalBand />
            </Sparklines>
        </div>
    );

}