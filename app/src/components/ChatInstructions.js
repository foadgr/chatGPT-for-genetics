import React from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InfoIconButton from './InfoIconButton';
import Box from '@mui/material/Box';

export default function ChatInstructions({ open, handleOpen, handleClose }) {
    return (
        <>
            <InfoIconButton handleOpen={handleOpen} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center" >
                        <Typography variant="h5" sx={{ fontWeight: "medium", m: 1 }}>OpenTargets GPT Assistant</Typography>
                        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon color="primary" />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" sx={{ fontWeight: 20, m: 1 }}>
                    This service uses OpenAI <a href="https://platform.openai.com/docs/guides/gpt" target="_blank">GPT-3.5-Turbo</a> to learn the <a href="https://platform.opentargets.org/" target="_blank">OpenTargets</a> API and build intelligent GraphQL queries.
                    </Typography><br></br>

                    <Typography variant="h6">
                        Getting started
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 10, m: 1 }}>
                        What would you like to retrieve from OpenTargets? This assistant can query many different links between drugs, diseases, genetic targets, and clinical symptoms.
                    </Typography>
                    <Typography variant="h6">
                        Enter your question
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 10, m: 1 }}>
                    {"A question like, 'Find the top 5 drugs associated with BRCA1' or 'What information do you have about gene targets for Keytruda?'"}
                    <br></br><br></br>
                    {"Press send, and wait as the assistant transforms your question to GraphQL and interprets the corresponding results."}
                    </Typography>

                    <Typography variant="captiontext">
                    Made by <a href="https://foadgreen.com/" target="_blank">@foadgr</a>
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}
