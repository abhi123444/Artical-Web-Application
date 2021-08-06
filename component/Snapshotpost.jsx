import React from "react";
import {Card} from "antd";
import {Link} from "@reach/router";

const Snapshotpost = (props) => {
  
    return(
        <div className="articles_container">
            <div className="Post_snipet">
                <Card
                    style={{ 
                        marginTop: 16  
                    }}
                    type="inner"
                    title = {props.title} 
                    extra={
                        <div className ="post_snnipet_Link">
                            <Link to={`/post/${props.id}`} style={{marginRight:"10px"}}Read Full> Read Full Article</Link>
                            {<Link to={`/edit/${props.id}`}>Edit</Link>}
                        </div>
                    }
                >
                    {props.content}
                </Card>
            </div>
        </div>
    )
}

export default Snapshotpost;