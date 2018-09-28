import { Button, Divider, Typography } from '@material-ui/core';
import * as React from 'react';
import { compose, withHandlers, withState } from 'recompose';

import { coverCropSlideImages, teamMembers } from '../../../utils/CC_constants';
import ContactUs from '../../contactUs/ContactUs';
import Members from '../../members/Members';
import PictureSlide from '../../pictureSlide/PictureSlide';

interface IProps {
    showMore: boolean;
    setShowStatus: () => void;
}

export const Who: React.SFC<IProps> = ({ showMore, setShowStatus }) => {
    return (
        <div>
            <Typography variant="title">Who are we?</Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <Typography variant="body1">
                Team of interdisciplinary scientists interested in the long-term
                viability of California agriculture and conservation of natural
                resources. We have brought together our specialties in
                hydrology, agronomy, soil science, and economics to answer the
                important question: <br />
            </Typography>
            <Typography
                variant="subheading"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                How much water do cover crops use?
            </Typography>

            <Members
                members={showMore ? teamMembers : teamMembers.slice(0, 3)}
            />

            <Button
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px auto',
                    width: '20%',
                }}
                color="primary"
                onClick={setShowStatus}
                variant="outlined"
            >
                {showMore ? 'Show Less' : 'Show More'}
            </Button>
            <Typography variant="subheading">More about our work</Typography>
            <Typography variant="body1">
                <a href="https://www.newsdeeply.com/water/articles/2018/05/15/facing-climate-and-water-pressures-farmers-return-to-age-old-practice">
                    - Facing Climate and Water Pressures, Farmers Return to
                    Age-Old Practice
                </a>
                <br />
                <a href="http://casi.ucanr.edu/?blogpost=27060&blogasset=14128">
                    - UC Davis Undergrad Shares Research on Tradeoffs of Cover
                    Crop Water Use
                </a>
                <br />
                <a href="http://ucanr.edu/blogs/blogcore/postdetail.cfm?postnum=20161">
                    - UC Davis Hydrology Team visits Five Points
                </a>
            </Typography>

            <PictureSlide pictures={coverCropSlideImages} />

            <Typography variant="subheading">Thanks to our sponcers</Typography>

            <Typography variant="body1">
                <a href="https://www.cdfa.ca.gov/Specialty_Crop_Competitiveness_Grants/">
                    - CDFA Specialty Crop Block Grant #15037
                </a>
                <br />
                <a href="http://ccwas.ucdavis.edu/">
                    - National Science Foundation IGERT: Climate Change, Water
                    and Society
                </a>
            </Typography>
            <ContactUs />
        </div>
    );
};

const enhancer = compose(
    withState('showMore', 'updateShowStatus', false),
    withHandlers({
        setShowStatus: ({ updateShowStatus }) => () =>
            updateShowStatus((n: boolean) => !n),
    })
);

export default enhancer(Who);
