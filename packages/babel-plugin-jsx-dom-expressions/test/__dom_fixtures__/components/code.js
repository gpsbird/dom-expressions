const Child = props => (
  <>
    <div ref={props.ref}>Hello {props.name}</div>
    <div>{props.children}</div>
  </>
);

const template = props => {
  let childRef;
  const { content } = props;
  return (
    <div>
      <Child name="John" {...props} ref={childRef} booleanProperty>
        <div>From Parent</div>
      </Child>
      <Child name="Jason" ref={props.ref}>
        {/* Comment Node */}
        <div>{content}</div>
      </Child>
      <Context.Consumer>{context => context}</Context.Consumer>
    </div>
  );
};

const template2 = (
  <Child
    name="Jake"
    dynamic={state.data}
    stale={/*@once*/ state.data}
    handleClick={clickHandler}
    hyphen-ated={state.data}
    ref={el => e = el}
  />
);

const template3 = (
  <Child>
    <div />
    <div />
    <div />
    After
  </Child>
);

const template4 = <Child>{<div />}</Child>;

const template5 = <Child dynamic={state.dynamic}>{state.dynamic}</Child>;

// builtIns
const template6 = (
  <For each={state.list} fallback={<Loading />}>
    {item => item}
  </For>
);

const template7 = (
  <Child>
    <div />
    {state.dynamic}
  </Child>
);

const template8 = (
  <Child>
    {item => item}
    {item => item}
  </Child>
);

const template9 = (
  <_garbage>Hi</_garbage>
)