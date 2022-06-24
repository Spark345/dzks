import classes from "./FormsControls.module.css"


export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return(<div className={classes.formControl + " " + meta.touched && meta.error ? classes.error : " "}>
            <div className={classes.dd}>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error
    return(<div className={classes.formControl + " " + meta.touched && meta.error ? classes.error : " "}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}