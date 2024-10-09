import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable"

interface props{
    problemId:string
}

const ProblemResizableSplitScreen:React.FC<props> = ({problemId}) => {
    return (
        <div className="flex flex-row bg-primary/80 w-full h-[100vh] text-primary-foreground">
            <ResizablePanelGroup
                direction="horizontal"
                className="max-w-full rounded-lg md:min-w-[450px]"
            >
                <ResizablePanel className='w-[50%] text-4xl min-w-[30%]'>
                    Left Problem Page {problemId}
                </ResizablePanel>
                <ResizableHandle className='border-gold border-2' />
                <ResizablePanel className='w-[50%] text-4xl min-w-[30%]'>
                    Right Problem Page {problemId}
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

export default ProblemResizableSplitScreen