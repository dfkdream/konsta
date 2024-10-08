<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    ListInput,
  } from 'konsta/svelte';

  import DemoIcon from '../components/DemoIcon.svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let name = { value: '', changed: false };
  let demoValue = '';

  const onNameChange = (e) => {
    name = { value: e.target.value, changed: true };
  };
  const onDemoValueChange = (e) => {
    demoValue = e.target.value;
  };
  const onDemoValueClear = () => {
    demoValue = '';
  };

  let bindedValue = '';
  let bindedSelectValue = 'Option 1';
</script>

<Page>
  <Navbar title="Form Inputs">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Default</BlockTitle>
  <List strongIos insetIos>
    <ListInput label="Name" type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="Password" type="password" placeholder="Your password">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="E-mail" type="email" placeholder="Your e-mail">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="URL" type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="Phone" type="tel" placeholder="Your phone number">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Gender"
      type="select"
      dropdown
      defaultValue="Male"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </ListInput>

    <ListInput
      label="Birthday"
      type="date"
      defaultValue="2014-04-30"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Date time"
      type="datetime-local"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Textarea"
      type="textarea"
      placeholder="Bio"
      inputClass="!h-20 resize-none"
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Outline</BlockTitle>
  <List strongIos insetIos>
    <ListInput outline label="Name" type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="Password"
      type="password"
      placeholder="Your password"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput outline label="E-mail" type="email" placeholder="Your e-mail">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput outline label="URL" type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput outline label="Phone" type="tel" placeholder="Your phone number">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="Gender"
      type="select"
      dropdown
      defaultValue="Male"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </ListInput>

    <ListInput
      outline
      label="Birthday"
      type="date"
      defaultValue="2014-04-30"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="Date time"
      type="datetime-local"
      placeholder="Please choose..."
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="Textarea"
      type="textarea"
      placeholder="Bio"
      inputClass="!h-20 resize-none"
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Floating Labels</BlockTitle>
  <List strongIos insetIos>
    <ListInput label="Name" floatingLabel type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Password"
      floatingLabel
      type="password"
      placeholder="Your password"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="E-mail"
      floatingLabel
      type="email"
      placeholder="Your e-mail"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput label="URL" floatingLabel type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      label="Phone"
      floatingLabel
      type="tel"
      placeholder="Your phone number"
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Outline + Floating Labels</BlockTitle>
  <List strongIos insetIos>
    <ListInput
      outline
      label="Name"
      floatingLabel
      type="text"
      placeholder="Your name"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="Password"
      floatingLabel
      type="password"
      placeholder="Your password"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="E-mail"
      floatingLabel
      type="email"
      placeholder="Your e-mail"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput outline label="URL" floatingLabel type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="Phone"
      floatingLabel
      type="tel"
      placeholder="Your phone number"
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Validation + Additional Info</BlockTitle>
  <List strongIos insetIos>
    <ListInput
      label="Name"
      type="text"
      placeholder="Your name"
      info="Basic string checking"
      value={name.value}
      error={name.changed && !name.value.trim()
        ? 'Please specify your name'
        : ''}
      onInput={onNameChange}
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Clear Button</BlockTitle>
  <List strongIos insetIos>
    <ListInput
      label="TV Show"
      type="text"
      placeholder="Your favorite TV show"
      info="Type something to see clear button"
      value={demoValue}
      clearButton={demoValue.length > 0}
      onInput={onDemoValueChange}
      onClear={onDemoValueClear}
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Icon + Input</BlockTitle>
  <List strongIos insetIos>
    <ListInput type="text" placeholder="Your name">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput type="password" placeholder="Your password">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput type="email" placeholder="Your e-mail">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput type="url" placeholder="URL">
      <DemoIcon slot="media" />
    </ListInput>
  </List>

  <BlockTitle>Label + Input</BlockTitle>
  <List strongIos insetIos>
    <ListInput label="Name" type="text" placeholder="Your name" />

    <ListInput label="Password" type="password" placeholder="Your password" />

    <ListInput label="E-mail" type="email" placeholder="Your e-mail" />

    <ListInput label="URL" type="url" placeholder="URL" />
  </List>

  <BlockTitle>Only Inputs</BlockTitle>
  <List strongIos insetIos>
    <ListInput type="text" placeholder="Your name" />

    <ListInput type="password" placeholder="Your password" />

    <ListInput type="email" placeholder="Your e-mail" />

    <ListInput type="url" placeholder="URL" />
  </List>

  <BlockTitle>Inputs + Additional Info</BlockTitle>
  <List strongIos insetIos>
    <ListInput type="text" placeholder="Your name" info="Full name please" />

    <ListInput
      type="password"
      placeholder="Your password"
      info="8 characters minimum"
    />

    <ListInput
      type="email"
      placeholder="Your e-mail"
      info="Your work e-mail address"
    />

    <ListInput type="url" placeholder="URL" info="Your website URL" />
  </List>

  <BlockTitle>Binded Inputs</BlockTitle>
  <List strongIos insetIos>
    <ListInput
      label="Text"
      type="text"
      placeholder="Enter something"
      bind:value={bindedValue}
    />
    <ListInput
      label="Password"
      type="password"
      placeholder="Enter something"
      bind:value={bindedValue}
    />
    <ListInput
      label="Email"
      type="email"
      placeholder="Enter something"
      bind:value={bindedValue}
    />
    <ListInput
      label="Validation"
      type="text"
      placeholder="Enter something"
      bind:value={bindedValue}
      error={!bindedValue.trim() ? 'Please enter something' : ''}
    />
    <ListInput
      label="Textarea"
      type="textarea"
      placeholder="Enter something"
      inputClass="!h-20 resize-none"
      bind:value={bindedValue}
    />
  </List>

  <BlockTitle>Binded Select</BlockTitle>
  <List strongIos insetIos>
    <ListInput
      label="Select"
      type="select"
      dropdown
      defaultValue="Option 1"
      placeholder="Please choose..."
      bind:value={bindedSelectValue}
    >
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
    </ListInput>
    <ListInput
      label="Current selection"
      type="text"
      placeholder="Enter something"
      bind:value={bindedSelectValue}
    />
  </List>
</Page>
