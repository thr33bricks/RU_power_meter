# Lumel NR30IoT Scraper
# Yordan Yordanov and Georgi Chapurov
# October 2025


import requests

def get_data(IP, function):
    url = f"http://{IP}/ajax.sht?ajaxFun={function}"
    tags = ["U1","U2","U3","I1","I2","I3","P1","P2","P3","Q1","Q2","Q3","S1","S2","S3","PF1","PF2","PF3","tgφ1","tgφ2","tgφ3","THD U1","THD U2","THD U3","THD I1","THD I2","THD I3","U avg","I avg","f","U12","U23","U31","∑P","∑Q","∑S","U123","PF avg","tgφ avg","P DMD","S DMD","I DMD","THD U","THD I","I(N)"]
    units = ["V", "A", "W", "var", "VA", "", "", "%", "%", "V", "A", "W", "var", "VA", "", "", "%", "%", "V", "A", "W", "var", "VA", "", "", "%", "%", "V", "A", "W", "var", "VA", "", "", "%", "%", "Hz", "V", "V", "V", "V", "W", "VA", "A", "A"]

    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        vals = list(response.json().values())

        data = []
        i = 0
        for tag in tags:
            data.append((tag, vals[i], units[i]))
            i += 1

        return data
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

def get_current(IP):
    return get_data(IP, "getMeasCfg")

def get_min(IP):
    return get_data(IP, "getMeasMinCfg")

def get_max(IP):
    return get_data(IP, "getMeasMaxCfg")

if __name__ == "__main__":
    IP = "10.42.0.92"
    print(get_current(IP))
