/*
let locationPoints = [
    {"lat": 37.795355, "long": -122.421486666667},
    {"lat": 37.766571044922, "long": -122.421531677246}
  ];*/

var vlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": 720,
    "height": 720,
    "config": {
        "view": {
        "stroke": "transparent"
        }
    },
    "layer": [
        {
        "data": {
            "url": "../dataset/SFFind_neighborhoods.topojson",
            "format": {
                "type": "topojson",
                "feature": "SFFind_neighborhoods"
            }
        },
        "mark": {
            "type": "geoshape",
            "stroke": "white",
            "strokeWidth": 2
        },
        "encoding": {
            "color": {
                "value": "#eee"
            }
        }
        },
        {
          "data": {
            "values": [
                {"lat": 37.795355, "long": -122.421486666667},
                {"lat": 37.766571044922, "long": -122.421531677246},
                {"lat": 37.78240595374784, "long": -122.47630655314094},
                {"lat": 37.7829399329451, "long": -122.46442502609422},
                {"lat": 37.78043963553152, "long": -122.4772398897371},
                {"lat": 37.782652399705285, "long": -122.47084599666566},
                {"lat": 37.7733038331604, "long": -122.46802391783669},
                {"lat": 37.774979210105336, "long": -122.47243450333877},
                {"lat": 37.78082203134836, "long": -122.46856387370153},
                {"lat": 37.781176766186576, "long": -122.5030864538133},
                {"lat": 37.77507596005672, "long": -122.51129492624534},
                {"lat": 37.77586214629671, "long": -122.49410398058994},
                {"lat": 37.766374072957106, "long": -122.45294703466854},
                {"lat": 37.77028284509647, "long": -122.49382345230345},
                {"lat": 37.77816459790806, "long": -122.45065481360477},
                {"lat": 37.77709039990913, "long": -122.45134615839365},
                {"lat": 37.77749934382878, "long": -122.45605066362907},
                {"lat": 37.79792540700026, "long": -122.42891397690136},
                {"lat": 37.79792540700026, "long": -122.42891397690136},
                {"lat": 37.78901633734544, "long": -122.41024243940024},
                {"lat": 37.784560141211806, "long": -122.40733704162238},
                {"lat": 37.78808218625765, "long": -122.41005693097291},
                {"lat": 37.784560141211806, "long": -122.40733704162238},
                {"lat": 37.78640961281089, "long": -122.40803623744476},
                {"lat": 37.788499477941336, "long": -122.4067711451779},
                {"lat": 37.789829338038246, "long": -122.4038415643651},
                {"lat": 37.78372378203807, "long": -122.41424157409635},
                {"lat": 37.77751171020645, "long": -122.41804316781624},
                {"lat": 37.774181421508935, "long": -122.42917834465946},
                {"lat": 37.76877049785351, "long": -122.42746205880601},
                {"lat": 37.76586162673693, "long": -122.4332554737022},
                {"lat": 37.77527205930737, "long": -122.4159081801724},
                {"lat": 37.78872115135928, "long": -122.4020657306611},
                {"lat": 37.775558160382, "long": -122.4186585835447},
                {"lat": 37.78325923532804, "long": -122.40270815508224},
                {"lat": 37.77456496882312, "long": -122.41262715459183},
                {"lat": 37.778851716626704, "long": -122.39274978789828},
                {"lat": 37.775558160382, "long": -122.4186585835447},
                {"lat": 37.77603932032225, "long": -122.40252409795595},
                {"lat": 37.784908299430455, "long": -122.40479506275997},
                {"lat": 37.771863705465925, "long": -122.41402670798057},
                {"lat": 37.78853592966637, "long": -122.39603476680188},
                {"lat": 37.77622135530407, "long": -122.41160611386445},
                {"lat": 37.7684733901082, "long": -122.40582756374104},
                {"lat": 37.817823897791946, "long": -122.3712458991155},
                {"lat": 37.82411913273524, "long": -122.372658041869},
                {"lat": 37.762229126060866, "long": -122.42297990126346},
                {"lat": 37.76088893209152, "long": -122.4350007026991},
                {"lat": 37.75655122870687, "long": -122.50890254470625},
                {"lat": 37.76223759790458, "long": -122.5071301982847},
                {"lat": 37.756834579739454, "long": -122.50245048010815},
                {"lat": 37.763420291159434, "long": -122.48033692793896},
                {"lat": 37.72694991292525, "long": -122.47603947349434},
                {"lat": 37.72694991292525, "long": -122.47603947349434},
                {"lat": 37.714694511853885, "long": -122.4852289359513},
                {"lat": 37.78880754257507, "long": -122.41188565874671},
                {"lat": 37.76257883049033, "long": -122.42166247826907},
                {"lat": 37.769917550675686, "long": -122.42093864733586},
                {"lat": 37.76853738566884, "long": -122.4156137824238},
                {"lat": 37.75550249751555, "long": -122.417658993747},
                {"lat": 37.7602353540718, "long": -122.41920604493745},
                {"lat": 37.7310799713596, "long": -122.48354489158451},
                {"lat": 37.7310799713596, "long": -122.48354489158451},
                {"lat": 37.709210351433505, "long": -122.41196819816332},
                {"lat": 37.7143669576848, "long": -122.41131582587983},
                {"lat": 37.709210351433505, "long": -122.41196819816332},
                {"lat": 37.72573637177566, "long": -122.38137737558108},
                {"lat": 37.724729109115316, "long": -122.3879304959651},
                {"lat": 37.71116977074043, "long": -122.39083588151917},
                {"lat": 37.72364450167391, "long": -122.43835512254596},
                {"lat": 37.71660346139888, "long": -122.45906354733845},
                {"lat": 37.73971000844432, "long": -122.4119916391387},
                {"lat": 37.74078867147537, "long": -122.41834709226875},
                {"lat": 37.74559509558596, "long": -122.41988576485541},
                {"lat": 37.737769711792836, "long": -122.38179490192714},
                {"lat": 37.7301646131596, "long": -122.39897045921349},
                {"lat": 37.732431907229156, "long": -122.39152135166226},
                {"lat": 37.727845926522235, "long": -122.42811582840267},
                {"lat": 37.73125509599642, "long": -122.40947816712493},
                {"lat": 37.716573895600156, "long": -122.40011893476164},
                {"lat": 37.72355694642878, "long": -122.4062869748828},
                {"lat": 37.722321765347836, "long": -122.4035739696998},
                {"lat": 37.80696290988273, "long": -122.410497554147},
                {"lat": 37.806780111468534, "long": -122.4195772441978},
                {"lat": 37.80821405292514, "long": -122.41580242607432},
                {"lat": 37.807978726080414, "long": -122.417715898404},
                {"lat": 37.80696290988273, "long": -122.410497554147},
                {"lat": 37.807163251424285, "long": -122.40889733794425},
                {"lat": 37.78268536745206, "long": -122.42246374465972},
                {"lat": 37.79573710834212, "long": -122.42341305643612},
                {"lat": 37.784944005025956, "long": -122.4347299934904},
                {"lat": 37.79689974673389, "long": -122.42196091177799},
                {"lat": 37.79414397920346, "long": -122.42140435740022},
                {"lat": 37.79750494349097, "long": -122.40204098389721},
                {"lat": 37.79309708139333, "long": -122.39650448774395},
                {"lat": 37.791716057660935, "long": -122.398264449392},
                {"lat": 37.76410227052293, "long": -122.43531729847254}
              ]
          },
          "mark": "point",
          "encoding": {
              "longitude": { "field": "long", "type": "quantitative" },
              "latitude": { "field": "lat", "type": "quantitative" }
            }
        }
    ]
  };

  // Embed the visualization in the container with id `vis`
  vegaEmbed('#vis', vlSpec);