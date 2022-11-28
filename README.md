# Difference Calculator


## Hexlet tests and linter status:
[![Actions Status](https://github.com/Kimpa4i/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Kimpa4i/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/5965575bad0b6f9200be/maintainability)](https://codeclimate.com/github/Kimpa4i/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5965575bad0b6f9200be/test_coverage)](https://codeclimate.com/github/Kimpa4i/frontend-project-lvl2/test_coverage)



## Description: 
**Difference Calculator** is the CLI programm that generate difference between two files. Supporting formats: JSON, YML, YAML.

## How to install:
1. Clone repository: ```git@github.com:Kimpa4i/frontend-project-lvl2.git```.
2. Change directory to frontend-project-lvl2
3. Run the command: ```make install```.

## Run tests:
```shell
$ make test
```

## How to use:
You can use the project as a script in the terminal or as a library in your JavaScript project. You can format the difference in three styles: stylish (default), plain and json.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```


## Asciinema:
### Comparison JSON
[![asciicast](https://asciinema.org/a/vVRnvqguNgjWWojJSkX3IuieB.svg)](https://asciinema.org/a/vVRnvqguNgjWWojJSkX3IuieB)
### Comparison YAML
[![asciicast](https://asciinema.org/a/9KSWiiGY0OxsPzbDHkeVIaDMO.svg)](https://asciinema.org/a/9KSWiiGY0OxsPzbDHkeVIaDMO)
### Comparison JSON nested files(Stylish format)
[![asciicast](https://asciinema.org/a/pel35ojuue38yDd2D42weGjnc.svg)](https://asciinema.org/a/pel35ojuue38yDd2D42weGjnc)
[![asciicast](https://asciinema.org/a/YIk9CoZLycKa3xswokVaq0Z3f.svg)](https://asciinema.org/a/YIk9CoZLycKa3xswokVaq0Z3f)

### Comparison JSON & YAML nested files(Plain format)
[![asciicast](https://asciinema.org/a/YIk9CoZLycKa3xswokVaq0Z3f.svg)](https://asciinema.org/a/YIk9CoZLycKa3xswokVaq0Z3f)

### Comparison JSON & YAML nested files(JSON format)
[![asciicast](https://asciinema.org/a/ysvpuIMDsXGEWipwdWQFc2UQI.svg)](https://asciinema.org/a/ysvpuIMDsXGEWipwdWQFc2UQI)